"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 数据库配置
exports.db = {
    path: 'localhost',
    port: 3308,
    database: '',
    user: 'root',
    password: 'root'
};
exports.port = 8000;
exports.domain = `http://localhost:${exports.port}/`;
exports.authURL = 'https://api.weixin.qq.com/sns/jscode2session';
exports.appid = 'wx1dded4776170eb26';
exports.secret = '27a7de786d226aeee07f3f2d89e5ebb9';
//# sourceMappingURL=index.js.map