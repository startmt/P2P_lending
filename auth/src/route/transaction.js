import { requireJWTAuth } from '../middleware/authorize'
import PaymentController from '../controller/transaction/PaymentController'
import ConnectBlockchainController from '../controller/transaction/ConnectBlockchainController'
import CheckLoadingBlockchainController from '../controller/transaction/CheckLoadingBlockchainController'
export const transaction = (router) => {
  router.post('/api/transaction/payment', requireJWTAuth, PaymentController)
  router.post('/api/transaction/check', ConnectBlockchainController)
  router.get(
    '/api/transaction/loading',
    requireJWTAuth,
    CheckLoadingBlockchainController,
  )
}
