import { requireJWTAuth } from '../middleware/authorize'
import PaymentController from '../controller/transaction/PaymentController'
export const transaction = (router) => {
  router.post('/transaction/payment', requireJWTAuth, PaymentController)
}
