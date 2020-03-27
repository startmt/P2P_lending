import db from '../mysql'
export const getUserIdOnefromRequestId = (requestId) => {
  return db.requestuser.findOne({ where: { requestId } })
}
