import jwt from 'jsonwebtoken'
import userModel from '../model/user'
import bCrypt from 'bcrypt'
import env from '../config'
import db from '../mysql'

export const checkUserFromDb = async (user) => {
  const query = await db.user.findOne({
    where: { username:user.username }
})
  try {
    return await bCrypt.compare(
      user.password,
      query.dataValues.password,
    )
  } catch (error) {
    return null
  }
}

export const createSession = async (user) => {
  const payload = {
    username: user.username,
  }
  const expiresTime = {
    expiresIn: '1h',
  }
  const SECRET = env.SECRET_KEY
  const enJwt = jwt.sign(payload, SECRET, expiresTime)
  return enJwt
}
