const { sql } = require("slonik");

module.exports = (db) => async (sender, receiver, message) => {
    try {
        await db.query(sql.unsafe`
            INSERT INTO messages (
                sender, receiver, message
            ) VALUES (
                (SELECT id FROM users WHERE name = ${sender}),
                (SELECT id FROM users WHERE name = ${receiver}),
                ${message}
            )
        `)

        return {
            ok: true
        }
    } catch (error) {
        console.log(error.message);

        return {
            ok: false
        }
    }
}