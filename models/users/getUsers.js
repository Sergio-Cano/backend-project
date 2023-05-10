const { sql } = require("slonik");

module.exports = (db) => async () => {
    try {
        const result = await db.query(sql.unsafe`
            SELECT users.name, COUNT(products.name) AS products
            FROM users INNER JOIN products ON users.id = products.vendor_id
            GROUP BY users.name
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