import { requireJWTAuth } from '../middleware/authorize'
import PaymentController from '../controller/transaction/PaymentController'
import ConnectBlockchainController from '../controller/transaction/ConnectBlockchainController'
export const transaction = (router) => {
  router.post('/api/transaction/payment', requireJWTAuth, PaymentController)
  router.post('/api/transaction/check', ConnectBlockchainController)
}
