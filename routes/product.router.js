const ProductControler = require("../controller/product.controller");
const uploadFile = require("../config/upload-file");

const productAPI = (app) => {
    app.get('/api/product/read-product', ProductControler.getAll)

    app.get('/api/product/read-new-product', ProductControler.getAllNewProduct)

    app.get('/api/product/read-sale-product', ProductControler.getAllSaleProduct)

    app.get('/api/product/read-product-by-name/:name', ProductControler.getAllProductByNamee)

    app.get('/api/product/read-product-by-cate/:cateId', ProductControler.getAllProductByCate)

    app.get('/api/product/read-product-by-id/:id', ProductControler.getOneProduct)

    app.post('/api/product/post-product', ProductControler.postProduct)

    app.put('/api/product/edit-product/:id', ProductControler.putProduct)

    app.delete('/api/product/delete-product/:id', ProductControler.deleteProduct)
};

module.exports = productAPI;