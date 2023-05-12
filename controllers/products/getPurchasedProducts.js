const errors = require("../../misc/errors");
const {getPurchasedProducts} = require("../../models/products");

module.exports = (db) => async (req, res, next) => {
    const user = res.locals;

    const result = await getPurchasedProducts(await db)(user);

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: result.data
    })
}