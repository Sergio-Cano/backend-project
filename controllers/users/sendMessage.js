const errors = require("../../misc/errors");
const {sendMessage} = require("../../models/users");

module.exports = (db) => async (req, res, next) => {
    const sender = res.locals;
    const receiver = req.params.name;
    const {message} = req.body;

    const result = await sendMessage(await db)(sender, receiver, message);

    if(!result) return next(errors[500]);

    res.status(200).json({
        success: true,
        message: "Message sent!"
    })
}