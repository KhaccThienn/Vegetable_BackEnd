const Favourite = require("../models/favourite.model");

const FavouriteController = {
    getAll: (req, res) => {
        const userId = req.params.userId;
        Favourite.getAllFavouriteByUserID(userId, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },
    postOne: (req, res) => {
        Favourite.getExistedProductInFav(req.body.account_id, req.body.product_id, (err1, data1) => {
            if (err1) {
                res.json(err1);
            } else {
                if (data1[0]) {
                    Favourite.removeFromListFavourite(data1[0].id, (err, data) => {
                        if (err) {
                            res.json(err);
                        }
                        res.json(data);
                    });
                } else {
                    Favourite.addToFavouriteByUSerID(req.body, (err, data) => {
                        if (err) {
                            res.json(err);
                        }
                        res.json(data);
                    });
                }

            }
        });

    },
    removeFavourite: (req, res) => {
        Favourite.removeFromListFavourite(req.params.favId, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    }
};

module.exports = FavouriteController;