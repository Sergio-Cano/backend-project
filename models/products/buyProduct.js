const { sql } = require("slonik");

module.exports = (db) => async (username, product) => {
    try {
        await db.query(sql.unsafe`
            INSERT INTO transactions (
                buyer_id, vendor_id, product_id, product_name
            ) VALUES (
                (SELECT id FROM users WHERE name = ${username}),
                (SELECT vendor_id FROM products WHERE name = ${product}),
                (SELECT id FROM products WHERE name = ${product}),
                ${product}
            )
        `);

        return {
            ok: true,
        }
    } catch (error) {
        console.log(error.message);

        return {
            ok: false
        }
    }
}