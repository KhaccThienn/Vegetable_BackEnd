/**
 * các hàm trong object thì có cấu trúc hơi đặc biệt, thay vì viết là:
 * const getAllFavouriteByUserID = () => {}
 * thì mình bỏ const, thay dấu = thành dấu : là được.
 */

/**
 * Về mô hình callback trong dự án:
 * thay vì viết dài dòng trong controller là: 
let getcategory = (req,res) => {
    let sql = 'select * from category';
    conn.query(sql, (err, results) => {
        if(!err){
            return res.status(200).json({
                message: "select category successfuly !",
                data: results
            })
        }else{
            return res.status(500).json(err)
        }
    })
};
thì mình sẽ tách phần thao tác với cơ sở dữ liệu ra riêng, tức là phần này:
let sql = 'select * from category';
    conn.query(sql, (err, results) => {
        if(!err){
            return res.status(200).json({
                message: "select category successfuly !",
                data: results
            })
        }else{
            return res.status(500).json(err)
        }
    })
và để nó vào trong 1 hàm khác. lúc này, dữ liệu khi truy vấn thành công nằm trong hàm
(err, results) => {
        if(err){
            return res.status(500).json(err)
        }else{
            return res.status(200).json({
                message: "select category successfuly !",
                data: results
            })
        }
}
sẽ được chuyển thành 1 hàm callback để trả về dữ liệu trong controller, ví dụ: 
getCategory: (callback) => {
        let sql = 'select * from category';
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    }

khi đó, controller sẽ xử lý như sau: 
// file category.controller.js: 
getAll: (req, res) => {
        Category.getCategory((err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        });
    },

    lúc này, hàm getAll của controller sẽ có trách nhiệm gọi đến hàm getCategory của model Category, 
    vì hàm getCategory này trả về callback có 2 tham số, (err, result) nên controller sẽ phải hứng về callback ấy, ví dụ:
    Category.getCategory((err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
    });
    lúc này, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
    } đã hứng được 2 biến err, data mà bên model trả về, và thực hiện gửi về bên phía người dùng thông qua response.

    các hàm khác tương tự, khó đâu thì hỏi trực tiếp sẽ rõ =))
 */

// require biến kết nối đến db
const conn = require("../config/connect");

// khởi tạo đối tượng category chứa các phương thức để thao tác vào database
const Category = {
    getCategory: (callback) => {
        let sql = 'select * from category';
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    getOneCategory: (id, callback) => {
        let sql = 'select * from category where id = ?';
        conn.query(sql, id, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    getByName: (name, callback) => {
        let sql = `select * from category where name LIKE '%${name}%'`;
        console.log(sql);
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    postCategory: (data, callback) => {
        let sql = 'insert into category SET ?';
        conn.query(sql, data, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    putCategory: (id, data, callback) => {
        let sql = 'update category set ? where id = ?';
        conn.query(sql, [data, id], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    },
    deletecategory: (id, callback) => {
        let sql = 'DELETE FROM category WHERE id = ?';
        conn.query(sql, [id], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        })
    }
};

// có khởi tạo thì phải có xuất ra
module.exports = Category;