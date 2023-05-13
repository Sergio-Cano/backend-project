const { sql } = require("slonik");

module.exports = (db) => async (user1, user2) => {
    try {
        const result = await db.query(sql.unsafe`
            SELECT users.name, TO_CHAR(messages.time, 'DD-MM-YYYY HH:MI') AS time, messages.message
            FROM users INNER JOIN messages ON users.id = messages.sender
            WHERE (SELECT id FROM users WHERE name = ${user1}) = messages.sender
            AND (SELECT id FROM users WHERE name = ${user2}) = messages.receiver

            UNION

            SELECT users.name, TO_CHAR(messages.time, 'DD-MM-YYYY HH:MI') AS time, messages.message
            FROM users INNER JOIN messages ON users.id = messages.sender
            WHERE (SELECT id FROM users WHERE name = ${user2}) = messages.sender
            AND (SELECT id FROM users WHERE name = ${user1}) = messages.receiver

            ORDER BY time
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