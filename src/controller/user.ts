import { BaseContext } from 'koa'
import axios from 'axios'
import * as jwt from 'jsonwebtoken'
import DB from '../db'
import { authURL, secret } from '../config'
import { success } from '../util';
export default class UserController {
    /**
     * 用户登录
     * @param ctx 
     * @param next 
     */
    public static async doLogin(ctx: BaseContext, next: Function) {
        // 基于JWT验证
        try {
            let token: string = jwt.sign({
                data: {
                    key: 'value'
                }
            }, secret, { expiresIn: '2h' })
            ctx.body = success({
                token,
            }, '登录成功')
        } catch (e) {

        }
        await next()
    }
    /**
     * 判断用户是否授权
     * @param ctx 
     * @param next 
     */
    public static async isLogined(ctx: BaseContext, next: Function) {
        const { token } = ctx.state.user.data
        // 通过token来查询用户表 是否有记录

    }
}
