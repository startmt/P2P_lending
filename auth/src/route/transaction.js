import { requireJWTAuth } from '../middleware/authorize'
import PaymentController from '../controller/transaction/PaymentController'
import ConnectBlockchainController from '../controller/transaction/ConnectBlockchainController'
import CheckLoadingBlockchainController from '../controller/transaction/CheckLoadingBlockchainController'
import WithdrawnController from '../controller/transaction/WithdrawnController'
import GetLogsController from '../controller/transaction/GetLogsController'
export const transaction = (router) => {
  router.post('/api/transaction/payment', requireJWTAuth, PaymentController)
  router.post('/api/transaction/check', ConnectBlockchainController)
  router.get(
    '/api/transaction/loading',
    requireJWTAuth,
    CheckLoadingBlockchainController,
  )
  router.post('/api/transaction/withdrawn', requireJWTAuth, WithdrawnController)
  router.get('/api/transaction/log/:id', GetLogsController)
}
