import { requireJWTAuth } from '../middleware/authorize'
import getFileController from '../controller/file/getFileController'
export const file = (router) => {
  router.get('/file/:bucket/:fileName', requireJWTAuth, getFileController)
}
