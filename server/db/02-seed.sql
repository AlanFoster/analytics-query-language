--------------------------------------------------------------------
-- Helpers
--------------------------------------------------------------------

-- Create random customer and sales records
CREATE OR REPLACE FUNCTION randomTimeduringBusinessHours(id integer, rowsPerDay integer) RETURNS timestamp AS $$
BEGIN
  return (
    -- Choose a random day and normalize it to midnight
    date_trunc('day', now())
       - (trunc(id / rowsPerDay) * interval '1 day')
       -- Randomly select a time between 9:00 and 18:00
       + interval '9 hour' + (trunc(random() * 60 * 8)) * interval '1 minute'
  );
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------
-- Seeds
--------------------------------------------------------------------

-- Ceate Product names
--
-- original coffee names and descriptions generated with the Faker gem
--   (1..20).map do |id|
--       "('#{Faker::Coffee.blend_name}', '#{Faker::Coffee.notes}', #{rand(2.0..7.0).round(2)}, randomTimeduringBusinessHours(#{id}, 2))"
--   end.join(",\n")
INSERT into
  products (name, description, cost, created_at)
VALUES
  ('Summer Select', 'delicate, creamy, hops, white grape, lavender', 2.93, randomTimeduringBusinessHours(1, 2)),
  ('Winter Look', 'dull, big, pecan, magnolia, ginger', 2.25, randomTimeduringBusinessHours(2, 2)),
  ('Pumpkin-spice Select', 'bright, syrupy, red apple, mango, bakers chocolate', 4.26, randomTimeduringBusinessHours(3, 2)),
  ('Blue Cake', 'mild, tea-like, brown sugar, molasses, green apple', 4.44, randomTimeduringBusinessHours(4, 2)),
  ('Hello Look', 'faint, big, milk chocolate, bergamot, leathery', 4.54, randomTimeduringBusinessHours(5, 2)),
  ('Major Blend', 'crisp, chewy, dill, granola, clementine', 2.59, randomTimeduringBusinessHours(6, 2)),
  ('Captain''s Extract', 'wild, chewy, medicinal, liquorice, mango', 6.73, randomTimeduringBusinessHours(7, 2)),
  ('KrebStar Been', 'vibrant, watery, cinnamon, soil, lemon', 6.12, randomTimeduringBusinessHours(8, 2)),
  ('Dark Mug', 'complex, watery, barley, black-tea, carmel', 6.45, randomTimeduringBusinessHours(9, 2)),
  ('The Utopia', 'lingering, slick, lychee, cedar, lemon', 4.4, randomTimeduringBusinessHours(10, 2)),
  ('Chocolate Mug', 'dirty, big, honeysuckle, milk chocolate, toast', 4.37, randomTimeduringBusinessHours(11, 2)),
  ('Seattle ', 'dense, tea-like, green-tea, red grape, black-tea', 3.82, randomTimeduringBusinessHours(12, 2)),
  ('Melty Utopia', 'juicy, tea-like, clove, lemon, cashew', 4.39, randomTimeduringBusinessHours(13, 2)),
  ('Express Select', 'deep, syrupy, red apple, white pepper, curry', 5.17, randomTimeduringBusinessHours(14, 2)),
  ('Melty Level', 'soft, slick, blueberry, cacao nibs, cream', 5.09, randomTimeduringBusinessHours(15, 2)),
  ('Morning Solstice', 'vibrant, coating, bittersweet chocolate, carbon, cashew', 2.69, randomTimeduringBusinessHours(16, 2)),
  ('Huggy Breaker', 'lingering, slick, peach, blueberry, peach', 4.55, randomTimeduringBusinessHours(17, 2)),
  ('Bluebery Forrester', 'crisp, silky, nectarine, leafy greens, sundried tomato', 6.83, randomTimeduringBusinessHours(18, 2)),
  ('Street Bean', 'dirty, round, nutella, brown sugar, concord grape', 4.63, randomTimeduringBusinessHours(19, 2)),
  ('Jacked Coffee', 'juicy, chewy, rubber, musty, peach', 2.05, randomTimeduringBusinessHours(20, 2));

INSERT INTO
  customers (name, email, number, created_at, deleted_at)
SELECT
  'customer ' || customer_id, -- name
  'customer-email+' || customer_id || '@example.com', -- email
  substring(random()::text from 3 for 10), -- number
  randomTimeDuringBusinessHours(customer_id, 2), -- created_at
  null -- deleted_at
FROM generate_series(1, 20) as customer_id
ON CONFLICT DO NOTHING;

INSERT INTO
  sales (customer_id, total, created_at, deleted_at)
SELECT
  1, -- customer_id
  (2 + (random() * 20))::decimal::money, -- total
  randomTimeduringBusinessHours(sale_id, trunc(15 + (random() * 10))::integer), -- created_at
  null -- deleted_at
FROM generate_series(1, 200) as sale_id
ON CONFLICT DO NOTHING;
