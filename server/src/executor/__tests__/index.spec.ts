import aqlToSql from "../aql-to-sql";
import * as moment from "moment";

const saturday = moment.utc("2018-08-25T15:09:30.566Z");
const sunday = moment.utc("2018-08-26T15:09:30.566Z");

describe("aql-to-sql", function () {
  describe("when it is a saturday", function () {
    it("provides default filters of the current week, and a limit of 100", function () {
      expect(aqlToSql("select * from products", saturday))
        .toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-18T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-25T15:09:30.566Z'
        limit
          100
        ",
          "errors": Array [],
        }
      `);
    });

    it("handles relative dates on the same week without a time specified", function () {
      expect(
        aqlToSql("select * from products since monday until tuesday", saturday)
      ).toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-20T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-21T23:59:59.999Z'
        limit
          100
        ",
          "errors": Array [],
        }
      `);
    });

    it("handles relative days on the same week without a time specified", function () {
      expect(
        aqlToSql(
          "select * from products since monday until today at '08:30'",
          saturday
        )
      ).toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-20T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-25T08:30:00.000Z'
        limit
          100
        ",
          "errors": Array [],
        }
      `);
    });

    it("handles relative days for last week without a time specified", function () {
      expect(aqlToSql("select * from products since last tuesday", saturday))
        .toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-14T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-25T15:09:30.566Z'
        limit
          100
        ",
          "errors": Array [],
        }
      `);
    });

    it("handles relative units", function () {
      expect(
        aqlToSql(
          "select * from products since 5 days ago until 4 days ago",
          saturday
        )
      ).toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-20T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-21T23:59:59.999Z'
        limit
          100
        ",
          "errors": Array [],
        }
      `);
    });

    it("handles filtering of values", function () {
      expect(
        aqlToSql(
          "select * from products where product_name in ('a', 'b', 'c') and price > 10",
          saturday
        )
      ).toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-18T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-25T15:09:30.566Z'
          and (
            (product_name in ('a', 'b', 'c'))
            and (price > 10)
          )
        limit
          100
        ",
          "errors": Array [],
        }
      `);
    });
  });

  describe("when it is a sunday", function () {
    it("provides default filters of the past week, and a limit of 100", function () {
      expect(aqlToSql("select * from products", sunday)).toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z'
        limit
          100
        ",
          "errors": Array [],
        }
      `);
    });

    it("handles relative dates on the same week without a time specified", function () {
      expect(
        aqlToSql("select * from products since monday until tuesday", sunday)
      ).toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-27T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-28T23:59:59.999Z'
        limit
          100
        ",
          "errors": Array [],
        }
      `);
    });

    it("handles relative dates on the previous week without a time specified", function () {
      expect(
        aqlToSql(
          "select * from products since last monday until last tuesday",
          sunday
        )
      ).toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-20T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-21T23:59:59.999Z'
        limit
          100
        ",
          "errors": Array [],
        }
      `);
    });

    it("validates dates in the future", function () {
      expect(
        aqlToSql(
          "select * from products since monday until today at '08:30'",
          sunday
        )
      ).toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-27T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-26T08:30:00.000Z'
        limit
          100
        ",
          "errors": Array [
            Object {
              "message": "Start date is after end date",
            },
          ],
        }
      `);
    });

    it("handles relative dates on the previous week without a time specified", function () {
      expect(
        aqlToSql(
          "select * from products since last monday until today at '08:30'",
          sunday
        )
      ).toMatchInlineSnapshot(`
        Object {
          "command": "
        select
          products.*
        from
          products
        where
          created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-20T00:00:00.000Z'
          and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-26T08:30:00.000Z'
        limit
          100
        ",
          "errors": Array [],
        }
      `);
    });

    describe("time series", function () {
      it("defaults a timeseries to 1 hour if a duration is not provided", function () {
        expect(
          aqlToSql("select count(total) from sales_view timeseries", sunday)
        ).toMatchInlineSnapshot(`
          Object {
            "command": "
          with full_dates as (
            select
              generate_series(
                TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z',
                TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z',
                interval '3600 seconds'
              ) timeseries
          )
          select
            timeseries,
            count(total)
          from
            full_dates
            left outer join sales_view on timeseries = (
              TIMESTAMP WITHOUT TIME ZONE 'epoch' + INTERVAL '1 second' * (
                extract(
                  'epoch'
                  from
                    TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
                ) + (
                  floor(
                    (
                      extract(
                        'epoch'
                        from
                          created_at
                      ) - extract(
                        'epoch'
                        from
                          TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
                      )
                    ) / 3600
                  ) * 3600
                )
              )
            )
            and created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
            and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z'
          group by
            timeseries
          order by
            full_dates.timeseries desc
          ",
            "errors": Array [],
          }
        `);
      });

      it("calculates the timeseries for a custom duration", function () {
        expect(
          aqlToSql(
            "select count(total) from sales_view timeseries 2 hours",
            sunday
          )
        ).toMatchInlineSnapshot(`
          Object {
            "command": "
          with full_dates as (
            select
              generate_series(
                TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z',
                TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z',
                interval '7200 seconds'
              ) timeseries
          )
          select
            timeseries,
            count(total)
          from
            full_dates
            left outer join sales_view on timeseries = (
              TIMESTAMP WITHOUT TIME ZONE 'epoch' + INTERVAL '1 second' * (
                extract(
                  'epoch'
                  from
                    TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
                ) + (
                  floor(
                    (
                      extract(
                        'epoch'
                        from
                          created_at
                      ) - extract(
                        'epoch'
                        from
                          TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
                      )
                    ) / 7200
                  ) * 7200
                )
              )
            )
            and created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
            and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z'
          group by
            timeseries
          order by
            full_dates.timeseries desc
          ",
            "errors": Array [],
          }
        `);
      });

      it("calculates the timeseries for a custom duration with the optional every keyword", function () {
        expect(
          aqlToSql(
            "select count(total) from sales_view timeseries every 2 hours",
            sunday
          )
        ).toMatchInlineSnapshot(`
          Object {
            "command": "
          with full_dates as (
            select
              generate_series(
                TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z',
                TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z',
                interval '7200 seconds'
              ) timeseries
          )
          select
            timeseries,
            count(total)
          from
            full_dates
            left outer join sales_view on timeseries = (
              TIMESTAMP WITHOUT TIME ZONE 'epoch' + INTERVAL '1 second' * (
                extract(
                  'epoch'
                  from
                    TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
                ) + (
                  floor(
                    (
                      extract(
                        'epoch'
                        from
                          created_at
                      ) - extract(
                        'epoch'
                        from
                          TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
                      )
                    ) / 7200
                  ) * 7200
                )
              )
            )
            and created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
            and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z'
          group by
            timeseries
          order by
            full_dates.timeseries desc
          ",
            "errors": Array [],
          }
        `);
      });

      it("calculates the timeseries for a custom duration with the optional every keyword and custom property name", function () {
        expect(
          aqlToSql(
            "select count(total) from sales_view timeseries deleted_at every 2 hours",
            sunday
          )
        ).toMatchInlineSnapshot(`
          Object {
            "command": "
          with full_dates as (
            select
              generate_series(
                TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z',
                TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z',
                interval '7200 seconds'
              ) timeseries
          )
          select
            timeseries,
            count(total)
          from
            full_dates
            left outer join sales_view on timeseries = (
              TIMESTAMP WITHOUT TIME ZONE 'epoch' + INTERVAL '1 second' * (
                extract(
                  'epoch'
                  from
                    TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
                ) + (
                  floor(
                    (
                      extract(
                        'epoch'
                        from
                          deleted_at
                      ) - extract(
                        'epoch'
                        from
                          TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
                      )
                    ) / 7200
                  ) * 7200
                )
              )
            )
            and deleted_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
            and deleted_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z'
          group by
            timeseries
          order by
            full_dates.timeseries desc
          ",
            "errors": Array [],
          }
        `);
      });
    });

    describe("facet", function () {
      it("calculates the given facet", function () {
        expect(
          aqlToSql(
            "select count(total) from sales_view facet customer_name",
            sunday
          )
        ).toMatchInlineSnapshot(`
          Object {
            "command": "
          select
            count(total)
          from
            sales_view
          where
            created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
            and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z'
          limit
            100
          ",
            "errors": Array [],
          }
        `);
      });
    });

    describe("time series and facet", function () {
      it("calculates the timeseries for a custom duration and facet", function () {
        expect(
          aqlToSql(
            "select count(total) from sales_view timeseries 2 hours facet customer_name",
            sunday
          )
        ).toMatchInlineSnapshot(`
          Object {
            "command": "
          with full_dates as (
            select
              generate_series(
                TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z',
                TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z',
                interval '7200 seconds'
              ) timeseries
          )
          select
            timeseries,
            count(total),
            customer_name
          from
            full_dates
            left outer join sales_view on timeseries = (
              TIMESTAMP WITHOUT TIME ZONE 'epoch' + INTERVAL '1 second' * (
                extract(
                  'epoch'
                  from
                    TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
                ) + (
                  floor(
                    (
                      extract(
                        'epoch'
                        from
                          created_at
                      ) - extract(
                        'epoch'
                        from
                          TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
                      )
                    ) / 7200
                  ) * 7200
                )
              )
            )
            and created_at >= TIMESTAMP WITHOUT TIME ZONE '2018-08-19T00:00:00.000Z'
            and created_at <= TIMESTAMP WITHOUT TIME ZONE '2018-08-26T15:09:30.566Z'
          group by
            timeseries,
            customer_name
          order by
            full_dates.timeseries desc
          ",
            "errors": Array [],
          }
        `);
      });
    });
  });
});
