import jwt from 'jwt-simple'
import userModel from '../model/user'
import tokenModel from '../model/token'
import bCrypt from 'bcrypt'
export const checkUserFromDb = async (username, password) => {
  const query = await userModel
    .findOne(
      {
        username: username
      },
    )
    .exec()
  try {
    return await bCrypt.compare(password, query.password)
  } catch (error) {
    return null
  }
}


export const createJwt = async(user) => {
  const payload = {
    sub: user.username
  }
  const SECRET = 'P2P_LENDING_PROJECT'
  const jwtObj = {
    jwt:jwt.encode(payload, SECRET)
  }
  try {
    await tokenModel.create(jwtObj)
    return jwtText
  } catch (error) {
    return error //will edit
  }
}  