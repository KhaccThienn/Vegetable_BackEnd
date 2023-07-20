const conn = require("../config/connect");

const Account = {
    // Register a new account:
    insertAccount: (data, callback) => {
        let sql = "INSERT INTO account SET ?";
        conn.query(sql, data, (err, data) => {
            if (err) {
                callback(err, null);
            }
            callback(null, data);
        })
    },

    // Login Account
    checkAccount: (data, callback) => {
        let sql = "SELECT * FROM account WHERE email = ? AND password = ?";
        conn.query(sql, [data.email, data.password], (err, data) => {
            if (err) {
                callback(err, null);
            }
            callback(null, data);
        })
    },

    getAll: (callback) => {
        let sql = "SELECT * FROM account ORDER BY role ASC";
        conn.query(sql, (err, data) => {
            if (err) {
                callback(err, null);
            }
            callback(null, data);
        })
    },
    getOne: (id, callback) => {
        let sql = "SELECT * FROM account WHERE id = ?";
        conn.query(sql, [id], (err, data) => {
            if (err) {
                callback(err, null);
            }
            callback(null, data);
        })
    }
};

module.exports = Account;