import * as Koa from 'koa'
import * as bodyparser from 'koa-bodyparser'
import * as views from 'koa-views'
import * as koastatic from 'koa-static'
import * as logger from 'koa-logger'
import * as cors from 'koa2-cors'
import * as path from 'path'
import * as jwt from 'koa-jwt'
import NotFound from './middlewares/NotFound';
import router from './router'
import { port, secret } from './config'
import { connectMySQL } from './db'
const app = new Koa()

connectMySQL() // 连接MySQL
app.use(views(path.join(__dirname, './views'), { extension: 'html' })) // 视图模板
app.use(koastatic(path.join(__dirname, './static'))) // 静态资源
app.use(bodyparser()) // 解析请求
app.use(logger()) // 配置控制台日志
app.use(cors()) // 设置跨域
app.use(jwt({ secret }).unless({
    path: [/\/user\/doLogin/, '/admin', /\/uploads\//] // 无需拦截 登录接口
}));
app.use(router.routes()).use(router.allowedMethods()) // 接口路由
// 自定义中间件
app.use(NotFound())

app.listen(port, () => {
    console.log(`Start server successfuly on ${port}`)
})