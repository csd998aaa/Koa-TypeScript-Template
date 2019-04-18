"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 返回成功
 * @param data
 * @param message
 */
exports.success = (data = [], message = '获取数据成功') => {
    return {
        success: true,
        data,
        message
    };
};
/**
 * 返回失败
 * @param data
 * @param message
 */
exports.fail = (data = [], message = '获取数据失败') => {
    return {
        success: false,
        data,
        message
    };
};
//# sourceMappingURL=util.js.map