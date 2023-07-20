const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "vegetable_database",
    charset: "utf8_unicode_ci"
});

conn.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err);
    }
    console.log('connected as id ' + conn.threadId);
})

module.exports = conn;