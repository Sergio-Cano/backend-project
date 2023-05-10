const errors = require("../../misc/errors");
const { getProducts } = require("../../models/products");

module.exports = (db) => async (req, res, next) => {
    const result = await getProducts(await db)();

    if(!result) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: result.data
    })
}