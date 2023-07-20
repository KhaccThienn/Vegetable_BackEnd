const Account = require("../models/account.model");

const AccountControler = {
    registerAccount: (req, res) => {
        Account.insertAccount(req.body, (err, result) => {
            if (err) {
                res.json(err);
            }
            res.json(result);
        })
    },

    loginAccount: (req, res) => {
        Account.checkAccount(req.body, (err, result) => {
            if (err) {
                res.json(err);
            }
            res.json(result);
        })
    },

    readAccount: (req, res) => {
        Account.getAll((err, result) => {
            if (err) {
                res.json(err);
            }
            res.json(result);
        })
    },
    readOneAccount: (req, res) => {
        Account.getOne(req.params.id, (err, result) => {
            if (err) {
                res.json(err);
            }
            res.json(result);
        })
    }
};

module.exports = AccountControler;