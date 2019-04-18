import * as mysql from 'mysql'
import { db } from '../config'
const pool = mysql.createPool(db)
export function connectMySQL() {
    pool.getConnection((err) => {
        if (err) {
            console.log(`Connect MySQL fail ${err}`)
        } else {
            console.log(`Connect MySQL successfuly on ${db.port}`)
            // 初始化数据库
            // new DB('',[])
        }
    })
}
export default class DB {
    /**
     * SQL语句执行工具
     * @param sql 
     * @param values 
     */
    public static async query(sql: string,values: Array<string>) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {
                        if (err) reject(err)
                        resolve(rows)
                        connection.release()
                    })
                }
            })
        })
    }
} 