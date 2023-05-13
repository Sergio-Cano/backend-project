const errors = require("../../misc/errors");
const { getChat } = require("../../models/users");

module.exports = (db) => async (req, res, next) => {
    const sender = res.locals
    const receiver = req.params.name

    const result = await getChat(await db)(sender, receiver);

    if(!result) return next(errors[500]);

    res.status(200).json({
        messages: result.data
    })
}