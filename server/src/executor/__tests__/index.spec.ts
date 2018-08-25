import aqlToSql from '../aql-to-sql';
import * as moment from 'moment';

const today = moment.utc('2018-08-25T15:09:30.566Z');

describe('aql-to-sql', function () {
    it('provides default filters of the past week, and a limit of 100', function () {
        expect(aqlToSql("select * from products", today)).toEqual({
            "command": "select * from products where created_at > '2018-08-18T15:09:30.566Z' and created_at <= '2018-08-25T15:09:30.566Z' limit 100 ",
            "errors": []
        });
    });

    it('handles relative dates on the same week without a time specified', function () {
        expect(aqlToSql("select * from products since monday until tuesday", today)).toEqual({
            "command": "select * from products where created_at > '2018-08-20T15:09:30.566Z' and created_at <= '2018-08-21T15:09:30.566Z' limit 100 ",
            "errors": []
        });
    });


    it('handles relative dates on the same week without a time specified', function () {
        expect(aqlToSql("select * from products since monday until today at '08:30'", today)).toEqual({
            "command": "select * from products where created_at > '2018-08-20T15:09:30.566Z' and created_at <= '2018-08-25T08:30:00.000Z' limit 100 ",
            "errors": []
        });
    });
});
