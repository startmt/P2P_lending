import jwt from 'jwt-simple'

export const loginMiddleware = (username, password) => {
   return (username === "kennaruk" && password === "mak") ? true : false
 }
export const signin = (username) => {
    const payload = {
        sub: username,
        iat: new Date().getTime()
     };
     const SECRET = "P2P_LENDING_PROJECT"
     return jwt.encode(payload, SECRET)
}  