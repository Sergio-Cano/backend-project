const { sql } = require("slonik");

module.exports = (db) => async (name, updatedProduct) => {    
    try {        
        await db.query(sql.unsafe`
            UPDATE products
            SET name = ${updatedProduct.name}, prize = ${updatedProduct.prize}
            WHERE LOWER(name) = ${name}
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