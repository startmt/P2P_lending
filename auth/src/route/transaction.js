import { requireJWTAuth } from '../middleware/authorize'
import PaymentController from '../controller/transaction/PaymentController'
export const transaction = (router) => {
  router.post('/api/transaction/payment', requireJWTAuth, PaymentController)
}
