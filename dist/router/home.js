"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const controller_1 = require("../controller");
const router = new Router();
exports.default = router
    .get('/', controller_1.HomeController.index);
//# sourceMappingURL=home.js.map