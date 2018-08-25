import { Pool } from 'pg';

// A simple type definition of pg-node's query call result
interface QueryResult<T> {
   command: string
   rowCount: number
   rows: T[]
}

enum DataType {
    string = 'character varying',
    integer = 'integer'
}

interface SchemaResponse {
    table_schema: string
    table_name: string
    column_name: string
    data_type: DataType
}

interface ColumnDefinition {
    name: string
    type: DataType
}

interface TableDefinition {
    name: string
    columns: ColumnDefinition[]
}

type Schema = TableDefinition[]

// The result of the executor
interface ExecutorResult {
    // The parsed command that was executed on the database
    // It wouldn't be normal to run this in production, but this is
    // only a spike
    command: string
    rowCount: number
    rows: { [key: string]: any }[]
}

export const execute = async function (req, res) {
    // TODO: Let's ignore pooling for now as part of this spike
    const executor = new Executor({
        connectionString: process.env.DATABASE_URL
    });
    await executor.start();

    try {
        const results = await executor.runQuery(req.body.query);
        res.end(JSON.stringify(results, null, 4));
    } catch (e) {
        res.status(400);
        res.end(JSON.stringify({ error: e }))
    }
};

class Executor {
    private pool: Pool;

    constructor({ connectionString }) {
        this.pool = new Pool({
            connectionString: connectionString
        });
    }

    async start() {
        await this.pool.connect()
    }

    async extractSchema(): Promise<Schema> {
        const res: QueryResult<SchemaResponse> = await this.pool.query(`
            select
                information_schema.tables.table_schema,
                information_schema.tables.table_name,
                information_schema.columns.column_name,
                information_schema.columns.data_type
              from information_schema.tables
              left join information_schema.columns
              on information_schema.tables.table_name = information_schema.columns.table_name
              where information_schema.tables.table_schema = 'public'
        `);

        const tableNameToColumns: { [key: string]: ColumnDefinition[] }  = res.rows.reduce(function (acc, row) {
            acc[row.table_name] = acc[row.table_name] || [];
            acc[row.table_name].push({
                name: row.column_name,
                type: row.data_type
            });
            return acc;
        }, {});

        return Object.keys(tableNameToColumns).map(function (tableName) {
            return { name: tableName, columns: tableNameToColumns[tableName] }
        });
    }

    async generateSampleValues(table: string, column: string): Promise<string[]> {
        // TODO: There's SQL injection issues to consider here. Note that
        // prepared statements can't be used in the place of table/column
        // positions, only data.
        const res: QueryResult<string> = await this.pool.query(`
            select ${column} from ${table} limit 100
        `);

        return res.rows;
    }

    async runQuery(query: string): Promise<ExecutorResult> {
        // For now, assume that all queries are valid postgres queries
        const command = query;

        const res: QueryResult<{ [key: string]: string }> = await this.pool.query(command);

        return {
            command: command,
            rowCount: res.rowCount,
            rows: res.rows,
        }
    }
}

export default Executor;
