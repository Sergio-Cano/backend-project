const router = require("express").Router();
const usersCtrl = require("../../controllers/users");
const authorizer = require("../../middlewares/authorizer");

module.exports = (db) => {
    router.get("/", usersCtrl.getUsers(db));
    router.get("/chats/:name", authorizer, usersCtrl.getChat(db));
    router.post("/chats/:name", authorizer, usersCtrl.sendMessage(db));


    return router;
}