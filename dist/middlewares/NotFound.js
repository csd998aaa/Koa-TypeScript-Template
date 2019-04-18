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
/**
 * 自定义404中间件,需要放在设置view后面
 */
function NotFound() {
    return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
        if (ctx.status === 404) {
            yield ctx.render('404');
        }
        yield next();
    });
}
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map