const router = require("express").Router();
const authCtrl = require("../../controllers/auth");
const authorizer = require("../../middlewares/authorizer");

module.exports = (db) => {
    router.post("/register", authCtrl.register(db));
    router.post("/login", authCtrl.login(db));
    router.post("/logout", authorizer, authCtrl.logout());

    return router;
}