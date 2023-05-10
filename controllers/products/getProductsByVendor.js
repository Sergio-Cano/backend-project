const errors = require("../../misc/errors");
const { getProductsByVendor } = require("../../models/products");

module.exports = (db) => async (req, res, next) => {
    const result = await getProductsByVendor(await db)(req.params.vendor);

    if(!result) return next(errors[500]);

    if(result.data.length === 0) return next(errors[404])

    res.status(200).json({
        success: true,
        data: result.data
    })
}