const Product = require("../models/product.model");

const ProductControler = {
    getAll: (req, res) => {
        Product.getProduct((err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    getAllNewProduct: (req, res) => {
        Product.getNewProduct((err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    getAllSaleProduct: (req, res) => {
        Product.getSaleProduct((err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    getAllProductByCate: (req, res) => {
        Product.getAllProductByCate(req.params.cateId, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    getAllProductByNamee: (req, res) => {
        Product.getAllProductByNameee(req.params.name, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    getOneProduct: (req, res) => {
        Product.getOne(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },

    postProduct: (req, res) => {
        Product.postProduct(req.body, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    putProduct: (req, res) => {
        Product.putProduct(req.params.id, req.body, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    deleteProduct: (req, res) => {
        Product.deleteProduct(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    }
}

module.exports = ProductControler;
