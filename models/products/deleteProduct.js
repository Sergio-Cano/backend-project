const { sql } = require("slonik");

module.exports = (db) => async (name) => {    
    try {        
        await db.query(sql.unsafe`
            DELETE FROM products WHERE LOWER(name) = ${name}
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