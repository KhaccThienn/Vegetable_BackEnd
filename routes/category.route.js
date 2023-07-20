/**
 * định nghĩa ra 4 phương thức để làm nghiệp vụ CRUD trên bảng Category
 */

const CategoryController = require("../controller/category.controller");

const categoryApi = (app) => {
    app.get('/api/category/read-category', CategoryController.getAll)

    app.get('/api/category/read-category-by-id/:id', CategoryController.getOneCategory);

    app.get('/api/category/read-category-by-name/:name', CategoryController.getByName);



    app.post('/api/category/post-category', CategoryController.postcategory)

    app.put('/api/category/edit-category/:id', CategoryController.putcategory)

    app.delete('/api/category/delete-category/:id', CategoryController.deletecategory)
};

module.exports = categoryApi;