// import module multer de upload file
const multer = require('multer');

// khoi tao vi tri luu file
const diskStorage = multer.diskStorage({
    // khoi tao vi tri luu file
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    // khoi tao ten file
    filename: (req, file, callback) => {
        // validate filename
        let fileType = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
        if (fileType.indexOf(file.mimetype) === -1) {
            let errorMessage = `File: ${file.originalname} is invalid`;
            return callback(errorMessage, null);
        }
        // ten file
        let fileName = Date.now() + "-" + file.originalname;
        callback(null, fileName);
    }
});

// su dung kho luu tru file
const uploadFile = multer({
    storage: diskStorage
});

module.exports = uploadFile;