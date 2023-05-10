const { sql } = require("slonik");

module.exports = (db) => async () => {
    try {
        const result = await db.query(sql.unsafe`
            SELECT products.name AS product, products.prize, users.name AS vendor
            FROM users INNER JOIN products ON users.id = products.vendor_id
        `);

        return {
            ok: true,
            data: result.rows
        }
    } catch (error) {
        console.log(error.message);

        return {
            ok: false
        }
    }
}