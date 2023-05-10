const { hash, serialize } = require("simple-stateless-auth-library");
const errors = require("../../misc/errors");
const { login } = require("../../models/auth");

module.exports = (db) => async (req, res, next) => {
    const { name, password } = req.body;

    if(!name || !password) return next(errors[400]);

    const response = await login(await db)(name, hash.compare(password));

    if(!response.ok) return next(errors[response.error_code] || 500);

    serialize(res, response.data);

    res.status(200).json({
        success: true,
        message: `Logged successfully as ${name}`
    });
}