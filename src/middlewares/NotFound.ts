import * as Koa from 'koa';
/**
 * 自定义404中间件,需要放在设置view后面
 */
export default function NotFound() {
    return async (ctx:Koa.Context,next:Function) => {
        if(ctx.status === 404) {
            await ctx.render('404')
        }
        await next()
    }
}