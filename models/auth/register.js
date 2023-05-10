const { sql } = require("slonik");

module.exports = (db) => async (name, password) => {
    try {
        await db.query(sql.unsafe`
            INSERT INTO users (
                name, password
            ) VALUES (
                ${name}, ${password}
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
