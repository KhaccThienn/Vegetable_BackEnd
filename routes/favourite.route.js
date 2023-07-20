const FavouriteController = require('../controller/favourite.controller');

/**
 * Nghiep vu: đối với trang yêu thích, chỉ có thêm vào, xóa khỏi và hiển thị danh sách yêu thích theo người dùng, chứ không có sửa
 *  nên k có router api put hoặc patch.
 */

const favouriteAPI = (app) => {
    app.get("/api/favourite/read-favourite/:userId", FavouriteController.getAll);

    app.post("/api/favourite/post-favourite", FavouriteController.postOne);

    app.delete("/api/favourite/delete-favourite/:favId", FavouriteController.removeFavourite)
};

module.exports = favouriteAPI;