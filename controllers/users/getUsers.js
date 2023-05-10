const { getUsers } = require("../../models/users");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
    const result = await getUsers(await db)();

    if(!result) return next(errors[500]);

    res.status(200).json({
        success: true,
        data: result.data
    })
}