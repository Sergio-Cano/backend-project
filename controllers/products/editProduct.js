const errors = require("../../misc/errors");
const { editProduct } = require("../../models/products");

module.exports = (db) => async (req, res, next) => {
    const result = await editProduct(await db)(req.params.name, req.body);

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
    })
}