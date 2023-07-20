const conn = require("../config/connect");


const Favourite = {
    getAllFavouriteByUserID: (userId, callback) => {
        let sql = "SELECT f.id as fID, p.* FROM `favourite` f INNER JOIN product p ON f.product_id = p.id WHERE f.account_id = ?";
        conn.query(sql, [userId], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        })
    },
    getExistedProductInFav: (accId, product_id, callback) => {
        let sql = "SELECT * from favourite where account_id = ? AND product_id = ?";
        conn.query(sql, [accId, product_id], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        })
    },
    addToFavouriteByUSerID: (data, callback) => {
        let sql = "INSERT INTO favourite SET ?";
        conn.query(sql, data, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        })
    },
    removeFromListFavourite: (favId, callback) => {
        let sql = "DELETE FROM favourite WHERE id = ?";
        conn.query(sql, [favId], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        })
    }
};

module.exports = Favourite;