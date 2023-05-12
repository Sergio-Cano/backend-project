const getProducts = require("./getProducts");
const getProductsByVendor = require("./getProductsByVendor");
const addProduct = require("./addProduct");
const editProduct = require("./editProduct");
const deleteProduct = require("./deleteProduct");
const buyProduct = require("./buyProduct");
const getPurchasedProducts = require("./getPurchasedProducts");

module.exports = (db) = {
    getProducts,
    getProductsByVendor,
    addProduct,
    editProduct,
    deleteProduct,
    buyProduct,
    getPurchasedProducts

}