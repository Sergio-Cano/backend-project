const { register } = require("../../models/auth");
const errors = require("../../misc/errors");
const { hash } = require("simple-stateless-auth-library");

module.exports = (db) => async (req, res, next) => {
    const { name, password } = req.body;

    if(!name || !password) return next(errors[400]);

    const encryptedPassword = await hash.encrypt(password);

    const response = await register(await db)(name, encryptedPassword);

    if(!response) return next(errors[500]);

    res.status(200).json({
        success: true
    })
}