const getProducts = require("./getProducts");
const getProductsByVendor = require("./getProductsByVendor");
const addProduct = require("./addProduct");
const editProduct = require("./editProduct");
const deleteProduct = require("./deleteProduct");

module.exports = (db) = {
    getProducts,
    getProductsByVendor,
    addProduct,
    editProduct,
    deleteProduct

}