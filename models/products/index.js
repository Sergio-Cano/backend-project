const getProducts = require("./getProducts");
const getProductsByVendor = require("./getProductsByVendor");
const addProduct = require("./addProduct");

module.exports = (db) = {
    getProducts,
    getProductsByVendor,
    addProduct,

}