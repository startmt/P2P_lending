import { requireJWTAuth } from '../middleware/authorize'
import getLendingController from '../controller/lending/getLendingController'
import createLendingController from '../controller/lending/createLendingController'
export const lending = (router) => {
  router.get('/lending/', requireJWTAuth, getLendingController)
  router.post('/lending/create', requireJWTAuth, createLendingController)
}