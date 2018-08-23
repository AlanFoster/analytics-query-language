-- Fake database schema + seed used for the purposes of testing
-- out the various possibilities for auto-completion

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

-- Seeds

INSERT INTO products (name, description, cost, created_at, deleted_at)
VALUES
  ('potato bread', 'tasty with a fry', 0.60, now(), NULL),
  ('bacon-lite', 'the healthier choice!', 1.20, now(), NULL),
  ('beans', 'the healthier choice!', 0.80, now(), NULL);

INSERT INTO sales (customer_id, total, created_at, deleted_at)
VALUES
  (1, 100.123, now(), NULL);

INSERT INTO customers (name, email, number, created_at, deleted_at)
VALUES
  ('customer one', 'customer+one@example.com', '07123312311', now(), NULL),
  ('customer two', 'customer+two@example.com', '07923042321', now(), NULL),
  ('customer three', 'customer+three@example.com', '07923042321', now(), NULL);
