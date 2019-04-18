import * as Router from 'koa-router'
import { UserController } from '../controller'
const router = new Router()

export default router
    .post('/doLogin', UserController.doLogin)
    .post('/isLogined',UserController.isLogined)

