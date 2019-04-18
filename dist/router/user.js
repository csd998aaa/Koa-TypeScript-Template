"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const controller_1 = require("../controller");
const router = new Router();
exports.default = router
    .get('/doLogin', controller_1.UserController.doLogin)
    .get('/isLogined', controller_1.UserController.isLogined);
//# sourceMappingURL=user.js.map