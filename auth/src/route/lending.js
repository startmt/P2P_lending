import env from '../config'
import { requireJWTAuth } from '../middleware/authorize'
import getLendingController from '../controller/lending/getLendingController'
export const lending = (router) => {
  router.get('/lending/', requireJWTAuth, getLendingController)
}