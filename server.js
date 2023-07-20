/**
 * Vì dự án viết theo mô hình MVC - không có view vì đây là API nên sẽ phải tuân thủ theo mô hình sau:
 * Map Router - Map Controller - Controller Call model - Model thao tác với database
 * xem hình sau: https://daotaotester.com/wp-content/uploads/2022/12/mo-hinh-MVC-8.jpg.webp
 */

// require module dotenv để sử dụng các biến trong file .env (luôn phải require đầu vì tất cả các file đều dùng)
require("dotenv").config();
// require file connect để dùng các biến trong file .env vào file này
require('./config/connect');

// require các module cần thiết 
/**
 * express: framework express
 * bodyparser: lấy dữ liệu json từ form
 * cors: vì khi 2 dự án FE và BE dùng chung localhost sẽ xảy ra lỗi Allow-Cors-Origin, nên phải sử dụng cors trong backend, FE không cần thiết
 * path: để lấy đường dẫn tĩnh cho ảnh trên localhost, nếu k có thì ảnh k hiển thị
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");

// require các API vào file server để sử dụng biến app

const accountAPI = require("./routes/account.route");
const categoryAPI = require("./routes/category.route");
const productAPI = require("./routes/product.router");
const favouriteAPI = require("./routes/favourite.route");

// khởi tạo app
const app = express();

// khởi động cors
app.use(cors());
// 2 dòng dưới như nhau, chỉ để lấy dữ liệu json từ client gửi lên
app.use(express.json());
app.use(bodyParser.json());
// chỉ ra đường dẫn tĩnh cho ảnh để hiển thị trên local
app.use(express.static(path.join(__dirname, '/uploads')));

// cái này là gì quên cmnr
app.use(bodyParser.urlencoded({
    extended: true,
}));

// truyền biến app vào các router, để sử dụng app.get, app.post, ....
accountAPI(app);
categoryAPI(app);
productAPI(app);
favouriteAPI(app);

// lắng nghe cổng backend
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.SERVER_PORT}`);
});