import aqlToSql from '../aql-to-sql';
import * as moment from 'moment';

const saturday = moment.utc('2018-08-25T15:09:30.566Z');
const sunday = moment.utc('2018-08-26T15:09:30.566Z');

describe('aql-to-sql', function () {
    describe('when it is a saturday', function () {
        it('provides default filters of the past week, and a limit of 100', function () {
            expect(aqlToSql("select * from products", saturday)).toEqual({
                "command": "select * from products where created_at > '2018-08-18T15:09:30.566Z' and created_at <= '2018-08-25T15:09:30.566Z' limit 100 ",
                "errors": []
            });
        });

        it('handles relative dates on the same week without a time specified', function () {
            expect(aqlToSql("select * from products since monday until tuesday", saturday)).toEqual({
                "command": "select * from products where created_at > '2018-08-20T15:09:30.566Z' and created_at <= '2018-08-21T15:09:30.566Z' limit 100 ",
                "errors": []
            });
        });


        it('handles relative dates on the same week without a time specified', function () {
            expect(aqlToSql("select * from products since monday until today at '08:30'", saturday)).toEqual({
                "command": "select * from products where created_at > '2018-08-20T15:09:30.566Z' and created_at <= '2018-08-25T08:30:00.000Z' limit 100 ",
                "errors": []
            });
        });
    });

    describe('when it is a sunday', function () {
        it('provides default filters of the past week, and a limit of 100', function () {
            expect(aqlToSql("select * from products", sunday)).toEqual({
                "command": "select * from products where created_at > '2018-08-19T15:09:30.566Z' and created_at <= '2018-08-26T15:09:30.566Z' limit 100 ",
                "errors": []
            });
        });

        it('handles relative dates on the same week without a time specified', function () {
            expect(aqlToSql("select * from products since monday until tuesday", sunday)).toEqual({
                "command": "select * from products where created_at > '2018-08-20T15:09:30.566Z' and created_at <= '2018-08-21T15:09:30.566Z' limit 100 ",
                "errors": []
            });
        });

        it('handles relative dates on the same week without a time specified', function () {
            expect(aqlToSql("select * from products since monday until today at '08:30'", sunday)).toEqual({
                "command": "select * from products where created_at > '2018-08-20T15:09:30.566Z' and created_at <= '2018-08-26T08:30:00.000Z' limit 100 ",
                "errors": []
            });
        });
    });
});
