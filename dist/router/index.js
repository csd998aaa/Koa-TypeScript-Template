"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const home_1 = require("./home");
const user_1 = require("./user");
const router = new Router();
router.use('/', home_1.default.routes(), home_1.default.allowedMethods()); // 首页
router.use('/user', user_1.default.routes(), user_1.default.allowedMethods()); // 用户模块
exports.default = router;
//# sourceMappingURL=index.js.map