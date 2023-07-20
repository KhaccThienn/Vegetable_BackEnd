const Category = require("../models/category.model");

const CategoryController = {
    getAll: (req, res) => {
        Category.getCategory((err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    getOneCategory: (req, res) => {
        Category.getOneCategory(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    getByName: (req, res) => {
        console.log(req.params.name);
        Category.getByName(req.params.name, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    postcategory: (req, res) => {
        Category.postCategory(req.body, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    putcategory: (req, res) => {
        Category.putCategory(req.params.id, req.body, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    deletecategory: (req, res) => {
        Category.deletecategory(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    }
}

module.exports = CategoryController;
