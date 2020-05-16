import { requireJWTAuth } from '../middleware/authorize'
import getRequestController from '../controller/lending/getRequestController'
import createLendingController from '../controller/lending/createLendingController'
import getRequestByIdController from '../controller/lending/getRequestByIdController'
import getBorrowerRequestListController from '../controller/lending/getBorrowerRequestListController'
import getBorrowerRequestByIdController from '../controller/lending/getBorrowerRequestByIdController'
import getInitRequestListController from '../controller/lending/getInitRequestListController'
import getInitRequestListItemController from '../controller/lending/getInitRequestListItemController'
import adminConfirmInitRequestController from '../controller/lending/adminConfirmInitRequestController'
export const lending = (router) => {
  //lending admin
  router.get('/api/lending/admin', requireJWTAuth, getInitRequestListController)
  router.post(
    '/api/lending/admin/confirm',
    requireJWTAuth,
    adminConfirmInitRequestController,
  )
  router.get(
    '/api/lending/admin/:id',
    requireJWTAuth,
    getInitRequestListItemController,
  )

  router.get('/api/lending/', requireJWTAuth, getRequestController)
  router.post('/api/lending/create', requireJWTAuth, createLendingController)
  router.get(
    '/api/lending/my',
    requireJWTAuth,
    getBorrowerRequestListController,
  )
  router.get(
    '/api/lending/borrower/:id',
    requireJWTAuth,
    getBorrowerRequestByIdController,
  )
  router.get(
    '/api/lending/lender/:id',
    requireJWTAuth,
    getRequestByIdController,
  )
  router.get(
    '/api/lending/:id',
    requireJWTAuth,
    getBorrowerRequestByIdController,
  )
}
