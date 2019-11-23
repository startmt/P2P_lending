import {
    checkAuth
  } from '../service/auth'
  import {
    status400,
    status200,
  } from '../utils/status'
  export default async (req, res) => {
    let query = await checkAuth(req.authInfo.username)
    if (query) {
      status200(res, {
        username: query.username,
        isIdentify: query.isIdentify
      })
    } else {
      status400(res)
    }
  }
  