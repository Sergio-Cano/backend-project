const router = require("express").Router();
const usersCtrl = require("../../controllers/users");

module.exports = (db) => {
    router.get("/", usersCtrl.getUsers(db));



    return router;
}