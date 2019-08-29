import jwt from 'jwt-simple'
import userModel from '../model/user'
import bCrypt from 'bcrypt'
import { getInstance } from '../redis'

const redisClient = getInstance()

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

export const createSession = async(user) => {
  const payload = {
    username: user.username,
  }
  const SECRET = 'P2P_LENDING_PROJECT'
  const enJwt = jwt.encode(payload, SECRET)
  redisClient.set(enJwt, JSON.stringify(payload))
  return enJwt
}  