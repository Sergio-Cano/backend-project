INSERT INTO products (
    name, prize, vendor_id
) VALUES (
    'Cámara', 200, (SELECT id FROM users WHERE name = 'testUser2')
);

INSERT INTO products (
    name, prize, vendor_id
) VALUES (
    'Zapatillas', 50, (SELECT id FROM users WHERE name = 'testUser2')
);

INSERT INTO products (
    name, prize, vendor_id
) VALUES (
    'Vinilo', 30, (SELECT id FROM users WHERE name = 'testUser1')
);

INSERT INTO products (
    name, prize, vendor_id
) VALUES (
    'Consola', 150, (SELECT id FROM users WHERE name = 'testUser2')
);

INSERT INTO products (
    name, prize, vendor_id
) VALUES (
    'Casco', 70, (SELECT id FROM users WHERE name = 'testUser1')
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
    (SELECT id FROM products WHERE name = 'Casco'),
    'Casco'
);

INSERT INTO transactions (
    buyer_id, vendor_id, product_id, product_name
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser1'),
    (SELECT id FROM users WHERE name = 'testUser2'),
    (SELECT id FROM products WHERE name = 'Cámara'),
    'Cámara'
);

INSERT INTO transactions (
    buyer_id, vendor_id, product_id, product_name
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser1'),
    (SELECT id FROM users WHERE name = 'testUser2'),
    (SELECT id FROM products WHERE name = 'Zapatillas'),
    'Zapatillas'
);

----------------------------------------------------------

INSERT INTO messages (
    sender, receiver, message, time
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser1'),
    (SELECT id FROM users WHERE name = 'testUser2'),
    '¿La cámara sigue disponible?',
    '05-09-2023 10:00:00'
);

INSERT INTO messages (
    sender, receiver, message, time
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser2'),
    (SELECT id FROM users WHERE name = 'testUser1'),
    'Sí, aún está a la venta.',
    '05-09-2023 10:01:20'
);

INSERT INTO messages (
    sender, receiver, message, time
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser1'),
    (SELECT id FROM users WHERE name = 'testUser2'),
    'Genial, ahora mismo la compro.',
    '05-09-2023 10:02:40'
);

INSERT INTO messages (
    sender, receiver, message, time
) VALUES (
    (SELECT id FROM users WHERE name = 'testUser2'),
    (SELECT id FROM users WHERE name = 'testUser1'),
    'Perfecto, ¡disfrútala!',
    '05-09-2023 10:03:10'
);