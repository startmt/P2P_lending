import {
    checkAuth
  } from '../service/auth'
  import {
    status400,
    status200,
  } from '../utils/status'
import { getUserDatail } from '../service/crudBorrower'
  export default async (req, res) => {
    try{
      const query = await checkAuth(req.authInfo.username)
      let userDetail = {}
      if (query) {
        if(query.isIdentify) userDetail = await getUserDatail(req.authInfo.username)
        status200(res, {
          username: query.username,
          isIdentify: query.isIdentify,
          userDetail: userDetail
        })
      } else {
        status400(res)
      }
    }
    catch(e){
      console.log(e)
      status400(res)
    }
    
  }
  