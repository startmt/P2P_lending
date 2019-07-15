import jwt from 'jwt-simple'
import userModel from '../model/user'

export const checkUserFromDb = (username, password) => {
  return new Promise((resolve, reject) => {
    userModel
      .findOne(
        {},
        {
          username: username,
          password: password
        }
      )
      .exec((err, user) => {
        console.log(err)
        console.log(user)
        if(!err) {
          resolve((user.username == username && user.password == password))
        }
        reject(false)
      })
  })
}


export const signin = (username) => {
  const payload = {
    sub: username,
    iat: new Date().getTime()
  };
  const SECRET = "P2P_LENDING_PROJECT"
  return jwt.encode(payload, SECRET)
}  