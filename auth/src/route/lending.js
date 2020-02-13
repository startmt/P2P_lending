import { requireJWTAuth } from '../middleware/authorize'
import getRequestController from '../controller/lending/getRequestController'
import createLendingController from '../controller/lending/createLendingController'
import getRequestByIdController from '../controller/lending/getRequestByIdController'
import getBorrowerRequestListController from '../controller/lending/getBorrowerRequestListController'
import getBorrowerRequestByIdController from '../controller/lending/getBorrowerRequestByIdController'
import getLenderRequestListController from '../controller/lending/getLenderRequestListController'
export const lending = (router) => {
  router.get('/lending/', requireJWTAuth, getRequestController)
  router.post('/lending/create', requireJWTAuth, createLendingController)
  router.get(
    '/lending/borrower',
    requireJWTAuth,
    getBorrowerRequestListController,
  )
  router.get(
    '/lending/borrower/:id',
    requireJWTAuth,
    getBorrowerRequestByIdController,
  )
  router.get('/lending/lender', requireJWTAuth, getLenderRequestListController)
  router.get('/lending/lender/:id', requireJWTAuth, getRequestByIdController)
  router.get('/lending/:id', requireJWTAuth, getBorrowerRequestByIdController)
  router.post('/lending/:id', requireJWTAuth, (req, res) => res.end()) //not done
  router.post('/lending/admin/confirm', requireJWTAuth, (req, res) => res.end())
}

// • GET / Get all request lending’s list
// • GET /{id} Get detail of request lending
// • POST /{id} Accept request lending by investor
// • GET /lender Get list of accept request lending
// • GET /lender/{id} Get detail of request lending
// • GET /borrower Get list of user’s request lendings
// • GET /borrower/{id} Get detail of user’s request lending
// • POST /confirm/scb Confirm request from admin
