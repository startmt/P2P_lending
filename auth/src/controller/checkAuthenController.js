import {
  checkAuth,
} from '../service/auth'
import { getInstance } from '../redis'
import {
  status400,
  status200,
} from '../utils/status'
import { getUserDatail } from '../service/crudValidatedUser'
const redisClient = getInstance()
export default async (req, res) => {
  try {
    const query = await checkAuth(req.authInfo.username)
    const token = await redisClient.getAsync(req.authInfo.username + 'refresh')
    if (query.user.identify == true) {
      const userDetail = await getUserDatail(req.authInfo.username)
      status200(res, {
        username: query.user.username,
        isIdentify: query.user.identify,
        role: query.user.role,
        userDetail: userDetail.get(),
        isConnectScb: token ? true : false
      })
    } else {
      status200(res, {
        username: query.user.username,
        isIdentify: query.user.identify,
        role: query.user.role,
        isAuthSCB: query.scb || false,
        isConnectScb: token ? true : false
      })
    }
  }
  catch (e) {
    console.log(e)
    status400(res)
  }

}
