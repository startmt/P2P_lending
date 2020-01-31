import { requireJWTAuth } from '../middleware/authorize'
import getRequestController from '../controller/lending/getRequestController'
import createLendingController from '../controller/lending/createLendingController'
import getRequestByIdController from '../controller/lending/getRequestByIdController'
export const lending = (router) => {
  router.get('/lending/', requireJWTAuth, getRequestController)
  router.post('/lending/create', requireJWTAuth, createLendingController)
  router.get('/lending/:id', requireJWTAuth, getRequestByIdController)
  router.post('/lending/:id', requireJWTAuth, (req, res) => res.end()) //not done
  router.get('/lending/lender', requireJWTAuth, (req, res) => res.end())
  router.get('/lending/lender/:id', requireJWTAuth, (req, res) => res.end())
  router.get('/lending/borrower', requireJWTAuth, (req, res) => res.end())
  router.get('/lending/borrower/:id', requireJWTAuth, (req, res) => res.end())
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
