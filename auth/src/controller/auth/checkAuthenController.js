import { checkAuth } from '../../service/auth/auth'
import { getInstance } from '../../redis'
import { status400, status200 } from '../../utils/status'
import { getUserDatail } from '../../service/auth/crudValidatedUser'
const redisClient = getInstance()
export default async (req, res) => {
  try {
    const query = await checkAuth(req.authInfo.username)
    const token = await redisClient.getAsync(req.authInfo.username + 'refresh')
    if (query.user.identify == true) {
      const userDetail = await getUserDatail(req.authInfo.username)
      return status200(res, {
        username: query.user.username,
        isIdentify: query.user.identify,
        role: query.user.role,
        userDetail: userDetail.get(),
        isConnectScb: token ? true : false,
      })
    } else {
      w
      return status200(res, {
        username: query.user.username,
        isIdentify: query.user.identify,
        role: query.user.role,
        isAuthSCB: query.scb || false,
        isConnectScb: token ? true : false,
      })
    }
  } catch (e) {
    console.log(e)
    return status400(res)
  }
}
