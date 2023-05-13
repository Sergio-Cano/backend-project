module.exports = (db) = {
    getProducts: require("./getProducts"),
    getProductsByVendor: require("./getProductsByVendor"),
    addProduct: require("./addProduct"),
    editProduct: require("./editProduct"),
    deleteProduct: require("./deleteProduct"),
    buyProduct: require("./buyProduct"),
    getPurchasedProducts: require("./getPurchasedProducts"),    

}