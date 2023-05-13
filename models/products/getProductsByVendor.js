const { sql } = require("slonik");

module.exports = (db) => async (vendor) => {
    try {
        const result = await db.query(sql.unsafe`
            SELECT products.name AS product, products.prize
            FROM users INNER JOIN products ON users.id = products.vendor_id
            WHERE users.name = ${vendor}
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