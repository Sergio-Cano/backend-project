const { sql } = require("slonik");

module.exports = (db) => async (username) => {
    try {
        const result = await db.query(sql.unsafe`
            SELECT products.name, products.prize, users.name AS bought_from
            FROM products INNER JOIN transactions ON products.id = transactions.product_id
            INNER JOIN users ON transactions.vendor_id = users.id
            WHERE transactions.buyer_id = (SELECT id FROM users WHERE name = ${username})
        `)

        return {
            ok: true,
            data: result.rows
        }
    } catch (error) {
        console.log(error.message)

        return {
            ok: false
        }
    }
}