CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    prize INT NOT NULL,
    vendor_id uuid NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
    buyer_id uuid NOT NULL,
    vendor_id uuid NOT NULL,
    product_id uuid NOT NULL,
    product_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
    sender uuid NOT NULL,
    receiver uuid NOT NULL,
    message TEXT NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (sender != receiver)
);