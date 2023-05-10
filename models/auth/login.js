const { sql } = require("slonik");

module.exports = (db) => async (name, compareFn) => {
    try {
        const user = await db.maybeOne(sql.unsafe`
            SELECT name, password
            FROM users
            WHERE name = ${name}
        `);

        if(!user) return {
            ok: false,
            error_code: "wrong_data"
        };

        const samePassword = await compareFn(user.password);

        if(!samePassword) return {
            ok: false,
            error_code: "wrong_data"
        };

        return {
            ok: true,
            data: user.name 
        }
    } catch (error) {
        console.log(error.message);

        return {
            ok: false
        }
    }
}