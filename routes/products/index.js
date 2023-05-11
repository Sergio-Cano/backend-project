const router = require("express").Router();
const authorizer = require("../../middlewares/authorizer");
const productsCtrl = require("../../controllers/products");

module.exports = (db) => {
    router.get("/", productsCtrl.getProducts(db));
    router.get("/:vendor", productsCtrl.getProductsByVendor(db));
    router.post("/new", authorizer, productsCtrl.addProduct(db));
    router.put("/:name", authorizer, productsCtrl.editProduct(db));
    router.delete("/:name", authorizer, productsCtrl.deleteProduct(db));
    router.post("/:name/buy", authorizer, productsCtrl.buyProduct(db));

    return router;
}