INSERT INTO users (
    name, password
) VALUES (
    'testUser1', '1234'
);

INSERT INTO users (
    name, password
) VALUES (
    'testUser2', '5678'
);

------------------------------------

INSERT INTO products (
    name, prize, vendor_id
) VALUES (
    'Cámara', 200, (SELECT id FROM users WHERE name = 'testUser2')
);

INSERT INTO products (
    name, prize, vendor_id
) VALUES (
    'Zapatillas Converse', 50, (SELECT id FROM users WHERE name = 'testUser2')
);

INSERT INTO products (
    name, prize, vendor_id
) VALUES (
    'Vinilo', 30, (SELECT id FROM users WHERE name = 'testUser1')
);

INSERT INTO products (
    name, prize, vendor_id
) VALUES (
    'Nintendo DS', 100, (SELECT id FROM users WHERE name = 'testUser2')
);

INSERT INTO products (
    name, prize, vendor_id
) VALUES (
    'Casco moto', 70, (SELECT id FROM users WHERE name = 'testUser1')
);

------------------------------------------

INSERT INTO transactions (
    buyer_id, vendor_id, product_id, product_name
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser2'),
    (SELECT id FROM users WHERE name = 'testUser1'),
    (SELECT id FROM products WHERE name = 'Vinilo'),
    'Vinilo'
);

INSERT INTO transactions (
    buyer_id, vendor_id, product_id, product_name
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser2'),
    (SELECT id FROM users WHERE name = 'testUser1'),
    (SELECT id FROM products WHERE name = 'Casco moto'),
    'Casco moto'
);

INSERT INTO transactions (
    buyer_id, vendor_id, product_id, product_name
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser1'),
    (SELECT id FROM users WHERE name = 'testUser2'),
    (SELECT id FROM products WHERE name = 'Cámara'),
    'Cámara'
);

----------------------------------------------------------

INSERT INTO messages (
    sender, receiver, message, time
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser1'),
    (SELECT id FROM users WHERE name = 'testUser2'),
    '¿La cámara sigue disponible?',
    '2023-05-09 10:00:00'
);

INSERT INTO messages (
    sender, receiver, message, time
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser2'),
    (SELECT id FROM users WHERE name = 'testUser1'),
    'Sí, aún está a la venta.',
    '2023-05-09 10:01:20'
);

INSERT INTO messages (
    sender, receiver, message, time
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser1'),
    (SELECT id FROM users WHERE name = 'testUser2'),
    'Genial, ahora mismo la compro.',
    '2023-05-09 10:02:40'
);

INSERT INTO messages (
    sender, receiver, message, time
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser2'),
    (SELECT id FROM users WHERE name = 'testUser1'),
    'Perfecto, ¡disfrútala!',
    '2023-05-09 10:03:10'
);