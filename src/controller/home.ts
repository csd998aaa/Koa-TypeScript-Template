import { BaseContext } from 'koa'
export default class HomeController {
    public static async index (ctx: BaseContext, next: Function) {
        console.log('csd');
        await ctx.render('index')
        await next()
    }
}
