const conn = require("../config/connect");

const Product = {
    getProduct: (callback) => {
        let sql = 'select product.*, category.id as cateid, category.name as catename, category.status as cateStatus from product INNER JOIN category ON product.category_id = category.id';
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    getNewProduct: (callback) => {
        let sql = 'select product.*, category.id as cateid, category.name as catename, category.status as cateStatus from product INNER JOIN category ON product.category_id = category.id ORDER BY product.id DESC LIMIT 4';
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    getSaleProduct: (callback) => {
        let sql = 'select product.*, category.id as cateid, category.name as catename, category.status as cateStatus from product INNER JOIN category ON product.category_id = category.id WHERE product.sale_price > 0 LIMIT 8';
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    getAllProductByCate: (cateId, callback) => {
        let sql = 'select product.*, category.id as cateid, category.name as catename, category.status as cateStatus from product INNER JOIN category ON product.category_id = category.id WHERE category.id = ?';
        conn.query(sql, cateId, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },

    getAllProductByNameee: (name, callback) => {
        let sql = `select product.*, category.id as cateid, category.name as catename, category.status as cateStatus from product INNER JOIN category ON product.category_id = category.id WHERE product.name LIKE '%${name}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    getOne: (id, callback) => {
        let sql = 'select product.*, category.id as cateid, category.name as catename, category.status as cateStatus from product INNER JOIN category ON product.category_id = category.id WHERE product.id = ?';
        conn.query(sql, [id], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    postProduct: (data, callback) => {
        let sql = 'insert into product SET ?';
        conn.query(sql, data, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    putProduct: (id, data, callback) => {
        let sql = 'update product set ? where id = ?';
        conn.query(sql, [data, id], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    deleteProduct: (id, callback) => {
        let sql = 'DELETE FROM product WHERE id = ?';
        conn.query(sql, [id], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    }
};

module.exports = Product;