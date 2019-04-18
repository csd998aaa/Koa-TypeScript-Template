"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config_1 = require("../config");
class UserController {
    /**
     * 用户登录
     * @param ctx
     * @param next
     */
    static doLogin(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const js_code = ctx.query.code;
            try {
                let openid = '';
                let session_key = '';
                yield axios_1.default.get(config_1.authURL, {
                    params: {
                        appid: config_1.appid,
                        secret: config_1.secret,
                        js_code,
                        grant_type: 'authorization_code'
                    }
                }).then(res => res.data).then(res => {
                    openid = res.openid;
                    session_key = res.session_key;
                });
                console.log(openid);
            }
            catch (e) {
            }
        });
    }
    /**
     * 判断用户是否授权
     * @param ctx
     * @param next
     */
    static isLogined(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // await DB.query('', []).then(res => {
            // })
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.js.map