"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const views = require("koa-views");
const koastatic = require("koa-static");
const logger = require("koa-logger");
const cors = require("koa2-cors");
const path = require("path");
const NotFound_1 = require("./middlewares/NotFound");
const router_1 = require("./router");
const config_1 = require("./config");
const db_1 = require("./db");
const app = new Koa();
db_1.connectMySQL(); // 连接MySQL
app.use(views(path.join(__dirname, './views'), { extension: 'html' })); // 视图模板
app.use(koastatic(path.join(__dirname, './static'))); // 静态资源
app.use(bodyparser()); // 解析请求
app.use(logger()); // 配置控制台日志
app.use(cors()); // 设置跨域
app.use(router_1.default.routes()).use(router_1.default.allowedMethods()); // 接口路由
// 自定义中间件
app.use(NotFound_1.default());
app.listen(config_1.port, () => {
    console.log(`Start server successfuly on ${config_1.port}`);
});
//# sourceMappingURL=index.js.map