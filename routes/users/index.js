const router = require("express").Router();

module.exports = (db) => {
    const usersCtrl = require("../../controllers/users");
    
    router.get("/", usersCtrl.getUsers(db));



    return router;
}