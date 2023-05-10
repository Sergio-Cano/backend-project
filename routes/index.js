const router = require("express").Router();

const usersRouter = require("./users");

module.exports = (db) => {
    router.use("/users", usersRouter(db));

    return router;
}