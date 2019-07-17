import jwt from 'jwt-simple'
import userModel from '../model/user'
import tokenModel from '../model/token'
import bCrypt from 'bcrypt'
export const checkUserFromDb = async (user) => {
  const query = await userModel
    .findOne(
      {
        username: user.username
      },
    )
    .exec()
  try {
    return await bCrypt.compare(user.password, query.password)
  } catch (error) {
    return null
  }
}


export const createJwt = async(user) => {
  const payload = {
    sub: user.username,
  }
  const SECRET = 'P2P_LENDING_PROJECT'
  const options = { upsert: true, new: true, setDefaultsOnInsert: true }
  const jwtObj = {
    jwt:jwt.encode(payload, SECRET)
  }
    await tokenModel.findOneAndUpdate(jwtObj, jwtObj, options, function(error, result) {
      if (error) return
  })
    return jwtObj.jwt
}  