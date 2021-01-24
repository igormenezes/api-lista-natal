"use strict";
const Users_1 = require("../controllers/Users");
module.exports = app => {
    app.post('/login', Users_1.Users.login);
};
