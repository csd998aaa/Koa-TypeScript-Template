import * as Router from 'koa-router'
import home from './home'
import user from './user'
const router = new Router()

router.use('/', home.routes(), home.allowedMethods()) // 首页
router.use('/user', user.routes(), user.allowedMethods()) // 用户模块

export default router
