import {
  checkExistUser,
  create
} from '../service/registerService'
import bCrypt from 'bcrypt'
import { status400, status200, status422 } from '../utils/status'
export default async (req, res) => {
  let username = req.body.username
  let password = req.body.password
  let role = req.body.role
  const hashPassword = await bCrypt.hash(password, 10)
  const user = {
    username: username,
    password: hashPassword,
    role: role
  }

  const isUserExist = await checkExistUser(user)
  if (!isUserExist) {
    const isCreated = await create(user)
    if (isCreated) {
      status200(res, { message: 'create account success' })
    }
    else {
      status400(res)
    }
  }
  else {
    status422(res, { message: 'Your username is exist.'})
  }

}