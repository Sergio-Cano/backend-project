const router = require("express").Router();
const productsCtrl = require("../../controllers/products");

module.exports = (db) => {
    router.get("/", productsCtrl.getProducts(db));
    router.get("/:vendor", productsCtrl.getProductsByVendor(db));

    return router;
}