import passport from 'passport'
import BearerStrategy from 'passport-http-bearer'
import { getInstance } from '../redis'
const redisClient = getInstance()
const withBearer = new BearerStrategy(async (token, done) => {
  redisClient.get(token, (err, obj) => {
    const authInfo = JSON.parse(obj)
    try {
      (obj !== null) ? done(null, true, authInfo) : done(err)
    } catch (error) {
      done(err)
    }
  })
  
}
)

passport.use(withBearer)
export const requireJWTAuth = passport.authenticate('bearer', { session: false })