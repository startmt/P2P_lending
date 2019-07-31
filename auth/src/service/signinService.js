import jwt from 'jwt-simple'
import userModel from '../model/user'
import bCrypt from 'bcrypt'
import redis from 'redis'

const redisClient = redis.createClient()
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
  const jwtObj = {
    jwt:jwt.encode(payload, SECRET)
  }
  redisClient.hmset([jwtObj.jwt, 'username', user.username, 'role', 'user'])
  return jwtObj.jwt
}  