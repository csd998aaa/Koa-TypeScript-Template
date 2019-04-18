import * as Router from 'koa-router'
import { HomeController } from '../controller'
const router = new Router()

export default router
    .get('/', HomeController.index)