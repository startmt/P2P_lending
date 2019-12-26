import {
  checkAuth,
  validatedUser
} from '../service/auth'
import {
  status400,
  status200,
} from '../utils/status'
import { getUserDatail } from '../service/crudValidatedUser'

export default async (req, res) => {
  try {
    const query = await checkAuth(req.authInfo.username)
    if (query.user.identify == true) {
      const userDetail = await getUserDatail(req.authInfo.username)
      status200(res, {
        username: query.username,
        isIdentify: query.user.identify,
        role: query.role,
        userDetail: userDetail.get()
      })
    } else {
      status200(res, {
        username: query.user.username,
        isIdentify: query.user.identify,
        role: query.user.role,
        isAuthSCB: query.scb || false
      })
    }
  }
  catch (e) {
    console.log(e)
    status400(res)
  }

}
