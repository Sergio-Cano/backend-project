const errors = require("../../misc/errors");
const { deleteProduct } = require("../../models/products");

module.exports = (db) => async (req, res, next) => {
    const result = await deleteProduct(await db)(req.params.name);

    if(!result.ok) return next(errors[500]);

    res.status(200).json({
        success: true,
    })
}