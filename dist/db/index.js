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
const mysql = require("mysql");
const config_1 = require("../config");
const pool = mysql.createPool(config_1.db);
function connectMySQL() {
    pool.getConnection((err) => {
        if (err) {
            console.log(`Connect MySQL fail ${err}`);
        }
        else {
            console.log(`Connect MySQL successfuly on ${config_1.db.port}`);
            // 初始化数据库
            // new DB('',[])
        }
    });
}
exports.connectMySQL = connectMySQL;
class DB {
    /**
     * SQL语句执行工具
     * @param sql
     * @param values
     */
    static query(sql, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                pool.getConnection((err, connection) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        connection.query(sql, values, (err, rows) => {
                            if (err)
                                reject(err);
                            resolve(rows);
                            connection.release();
                        });
                    }
                });
            });
        });
    }
}
exports.default = DB;
//# sourceMappingURL=index.js.map