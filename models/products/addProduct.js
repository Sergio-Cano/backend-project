const { sql } = require("slonik");

module.exports = (db) => async (name, prize, vendor) => {    
    try {        
        await db.query(sql.unsafe`
            INSERT INTO products(
                name, prize, vendor_id
            ) VALUES (
                ${name}, ${prize}, (SELECT id FROM users WHERE name = ${vendor})
            )
        `);

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