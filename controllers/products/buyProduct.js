const errors = require("../../misc/errors");
const { buyProduct } = require("../../models/products");

module.exports = (db) => async (req, res, next) => {
    const username = res.locals;
    const product = req.params.name;

    const result = await buyProduct(await db)(username, product);

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        message: `You bought ${product}`
    })
}