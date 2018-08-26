--------------------------------------------------------------------
-- Schema
--
-- Fake database schema + seed used for the purposes of testing
-- out the various possibilities for auto-completion and reporting
--------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS customers (
  id             SERIAL PRIMARY KEY,
  name           VARCHAR(255) NOT NULL,
  email    VARCHAR(255) NOT NULL,
  number VARCHAR(255) NOT NULL,

  created_at     TIMESTAMP WITHOUT TIME ZONE,
  deleted_at     TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE IF NOT EXISTS products (
  id          BIGSERIAL PRIMARY KEY,
  name        VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  cost        MONEY,

  created_at  TIMESTAMP WITHOUT TIME ZONE,
  deleted_at  TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE IF NOT EXISTS sales (
  id          BIGSERIAL PRIMARY KEY,
  customer_id BIGINT,
  total       MONEY,

  created_at  TIMESTAMP WITHOUT TIME ZONE,
  deleted_at  TIMESTAMP WITHOUT TIME ZONE
);

-- Views that will be exposed for the user to make use of

DROP VIEW IF EXISTS sales_view;
CREATE VIEW
	sales_view
AS
	select customers.name as customer_name, sales.total, sales.created_at
	from sales
	left join customers on customers.id = sales.customer_id;

DROP VIEW IF EXISTS products_view;
CREATE VIEW
	products_view
AS
	select *
	from products;

DROP VIEW IF EXISTS customers_view;
CREATE VIEW
	customers_view
AS
	select *
	from customers;
