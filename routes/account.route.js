const AccountController = require("../controller/account.controller");

const accountAPI = (app) => {
    app.post("/api/create-account", AccountController.registerAccount);
    app.post("/api/login-account", AccountController.loginAccount);


    app.get("/api/read-account", AccountController.readAccount);
    app.get("/api/read-account/:id", AccountController.readOneAccount);
};

module.exports = accountAPI;