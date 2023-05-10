const router = require("express").Router();

module.exports = (db) => {
    router.use("/users", require("./users")(db));
    router.use("/products", require("./products")(db));
    router.use("/auth", require("./auth")(db));

    return router;
}