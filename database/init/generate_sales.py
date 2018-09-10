import random
import logging
from datetime import datetime, timedelta

import click
import psycopg2
from faker import Faker
from psycopg2.extras import LoggingConnection

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class Seed:
    typical_sales_pattern = [
        {"hour": 9, "average_sales": 2},
        {"hour": 10, "average_sales": 8},
        {"hour": 11, "average_sales": 11},
        {"hour": 12, "average_sales": 21},
        {"hour": 13, "average_sales": 8},
        {"hour": 14, "average_sales": 17},
        {"hour": 15, "average_sales": 28},
        {"hour": 16, "average_sales": 30},
        {"hour": 17, "average_sales": 14},
        {"hour": 18, "average_sales": 15},
        {"hour": 19, "average_sales": 3},
    ]

    product_names = [
        'danish', 'cheesecake', 'sugar',
        'Lollipop', 'wafer', 'Gummies',
        'sesame', 'Jelly', 'beans',
        'pie', 'bar', 'Ice', 'oat'
    ]

    product_descriptions = [
        'light', 'fluffy', 'warm',
        'fragrant', 'smokey', 'rich',
        'heavy',
    ]

    def __init__(self, weeks=0, open_business_days=5, products=0, customers=0, now=None):
        self.now = now
        self.weeks = weeks
        self.customers = customers
        self.products = products
        self.open_business_days = open_business_days

        self.fake = Faker()
        self.fake.seed(4321)

    def generate_products(self, cursor):
        for _ in range(self.products):
            created_at = self.fake.date_time_between(
                start_date=f"-{self.weeks}w", end_date=self.now
            )

            cursor.execute(
                "INSERT into  products (name, description, cost, created_at) VALUES (%s, %s, %s, %s);",
                (
                    ' '.join(self.fake.words(nb=3, ext_word_list=self.product_names)),
                    self.fake.sentence(ext_word_list=self.product_descriptions),
                    round(random.uniform(4, 8), 2),
                    created_at,
                ),
            )


    def generate_walk_in(self, cursor):
        created_at = self.now - timedelta(weeks=self.weeks)
        cursor.execute(
            "INSERT into customers (name, email, number, created_at) VALUES (%s, %s, %s, %s);",
            (
                "Walk In Customer",
                self.fake.email(),
                self.fake.phone_number(),
                created_at,
            ),
        )

    def generate_customers(self, cursor):
        for _ in range(self.customers):
            created_at = self.fake.date_time_between(
                start_date=f"-{self.weeks}w", end_date=self.now
            )

            cursor.execute(
                "INSERT into customers (name, email, number, created_at) VALUES (%s, %s, %s, %s);",
                (
                    self.fake.name(),
                    self.fake.email(),
                    self.fake.phone_number(),
                    created_at,
                ),
            )

    def generate_sales(self, cursor):
        now = self.now.replace(hour=0, minute=0, second=0, microsecond=0)

        for week in range(self.weeks):
            monday = now - timedelta(weeks=week, days=now.weekday())
            open_business_days = 5

            for day in range(open_business_days):
                for sale_pattern in self.typical_sales_pattern:
                    for sale in range(0, sale_pattern["average_sales"]):
                        customer_id = self._generate_customer_id()
                        total = round(random.uniform(4, 8), 2)
                        sale_date = monday + timedelta(
                            days=day,
                            hours=sale_pattern["hour"],
                            minutes=random.randint(1, 59),
                            seconds=random.randint(1, 59),
                        )

                        cursor.execute(
                            "INSERT into sales (customer_id, total, created_at) VALUES (%s, %s, %s);",
                            (customer_id, total, sale_date),
                        )

    def _generate_customer_id(self):
        is_walk_in_customer = random.randint(1, 100) <= 80

        if is_walk_in_customer:
            return 1
        else:
            return random.randint(1, self.customers)

@click.command()
@click.option(
    "--weeks", "weeks", default=4, help="Number of weeks to seed data for"
)
@click.option(
    "--products", "products", default=15, help="Number of products to create"
)
@click.option(
    "--customers", "customers", default=10, help="How many customers to create"
)
@click.option(
    "--connection-string",
    "connection_string",
    envvar="DATABASE_URL",
    default="postgresql://postgres@:5432/postgres",
    help="database connection string in libpq format",
)
def seed_database(weeks, customers, products, connection_string):
    connection = psycopg2.connect(
        dsn=connection_string, connection_factory=LoggingConnection
    )
    connection.initialize(logger)
    cursor = connection.cursor()

    seed = Seed(now=datetime.utcnow(), weeks=weeks, customers=customers, products=products)
    seed.generate_products(cursor)
    seed.generate_sales(cursor)
    seed.generate_walk_in(cursor)
    seed.generate_customers(cursor)

    connection.commit()


if __name__ == "__main__":
    seed_database()
