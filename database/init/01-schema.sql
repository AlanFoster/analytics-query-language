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

CREATE TABLE IF NOT EXISTS sold_products (
  id          BIGSERIAL PRIMARY KEY,
  sale_id     BIGINT,
  -- Note that this wouldn't be an appropriate data model, as we would most likely want
  -- the sold products data to be immutable.
  product_id  BIGINT,
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

DROP VIEW IF EXISTS sold_products_view;
CREATE VIEW
	sold_products_view
AS
	select sold_products.sale_id, sold_products.id, products.name as product_name, sold_products.total, sold_products.created_at
	from sold_products
	left join sales on sales.id = sold_products.sale_id
	left join customers on customers.id = sales.customer_id
	left join products on products.id = sold_products.product_id;
