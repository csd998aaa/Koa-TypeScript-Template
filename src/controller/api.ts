import { Context } from 'koa'
export default class ApiController {
    // 
    public static async index (ctx: Context, next: Function) {
        await ctx.render('index')
        await next()
    }
}
