const router = require("express").Router();
const authCtrl = require("../../controllers/auth");

module.exports = (db) => {
    router.post("/register", authCtrl.register(db));
    router.post("/login", authCtrl.login(db));

    return router;
}