const getProducts = require("./getProducts");
const getProductsByVendor = require("./getProductsByVendor");
const addProduct = require("./addProduct");
const editProduct = require("./editProduct");

module.exports = (db) = {
    getProducts,
    getProductsByVendor,
    addProduct,
    editProduct,

}