const errors = require("../../misc/errors");
const { addProduct } = require("../../models/products");

module.exports = (db) => async (req, res, next) => {
    const { name, prize } = req.body;

    const vendor = res.locals;

    const result = await addProduct(await db)(name, prize, vendor);

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        message: `Product added: ${name}`
    })
}