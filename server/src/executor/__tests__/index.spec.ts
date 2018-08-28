import aqlToSql from '../aql-to-sql';
import * as moment from 'moment';

const saturday = moment.utc('2018-08-25T15:09:30.566Z');
const sunday = moment.utc('2018-08-26T15:09:30.566Z');

describe('aql-to-sql', function () {
    describe('when it is a saturday', function () {
        it('provides default filters of the past week, and a limit of 100', function () {
            expect(aqlToSql("select * from products", saturday)).toEqual({
                "command": "select * from products where created_at > '2018-08-18T00:00:00.000Z' and created_at <= '2018-08-25T15:09:30.566Z' limit 100",
                "errors": []
            });
        });

        it('handles relative dates on the same week without a time specified', function () {
            expect(aqlToSql("select * from products since monday until tuesday", saturday)).toEqual({
                "command": "select * from products where created_at > '2018-08-20T00:00:00.000Z' and created_at <= '2018-08-21T23:59:59.999Z' limit 100",
                "errors": []
            });
        });


        it('handles relative dates on the same week without a time specified', function () {
            expect(aqlToSql("select * from products since monday until today at '08:30'", saturday)).toEqual({
                "command": "select * from products where created_at > '2018-08-20T00:00:00.000Z' and created_at <= '2018-08-25T08:30:00.000Z' limit 100",
                "errors": []
            });
        });
    });

    describe('when it is a sunday', function () {
        it('provides default filters of the past week, and a limit of 100', function () {
            expect(aqlToSql("select * from products", sunday)).toEqual({
                "command": "select * from products where created_at > '2018-08-19T00:00:00.000Z' and created_at <= '2018-08-26T15:09:30.566Z' limit 100",
                "errors": []
            });
        });

        it('handles relative dates on the same week without a time specified', function () {
            expect(aqlToSql("select * from products since monday until tuesday", sunday)).toEqual({
                "command": "select * from products where created_at > '2018-08-20T00:00:00.000Z' and created_at <= '2018-08-21T23:59:59.999Z' limit 100",
                "errors": []
            });
        });

        it('handles relative dates on the same week without a time specified', function () {
            expect(aqlToSql("select * from products since monday until today at '08:30'", sunday)).toEqual({
                "command": "select * from products where created_at > '2018-08-20T00:00:00.000Z' and created_at <= '2018-08-26T08:30:00.000Z' limit 100",
                "errors": []
            });
        });

        describe('time series', function () {
            it('defaults a timeseries to 1 hour if a duration is not provided', function () {
                expect(aqlToSql("select count(total) from products timeseries", sunday)).toEqual({
                    command:"with full_dates as (select generate_series(TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z', TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z', interval '3600 seconds') timeseries)\nselect timeseries, count(total)\nfrom full_dates\nleft outer join sales_view on timeseries = TIMESTAMP WITH TIME ZONE 'epoch' + INTERVAL '1 second' * (floor(extract('epoch' from created_at) / 3600) * 3600)\ngroup by timeseries\norder by full_dates.timeseries desc",
                    errors: []
                });
            });

            it('calculates the timeseries for a custom duration', function () {
                expect(aqlToSql("select count(total) from products timeseries 2 hours", sunday)).toEqual({
                    command:"with full_dates as (select generate_series(TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z', TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z', interval '7200 seconds') timeseries)\nselect timeseries, count(total)\nfrom full_dates\nleft outer join sales_view on timeseries = TIMESTAMP WITH TIME ZONE 'epoch' + INTERVAL '1 second' * (floor(extract('epoch' from created_at) / 7200) * 7200)\ngroup by timeseries\norder by full_dates.timeseries desc",
                    "errors": []
                });
            });
        });
    });
});
