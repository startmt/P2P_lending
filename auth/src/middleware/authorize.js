import passport from 'passport'
import BearerStrategy from 'passport-http-bearer'
import redis from 'redis'
const redisClient = redis.createClient()
const withBearer = new BearerStrategy(async (token, done) => {
  redisClient.get(token, (err, obj) => {
    try {
      (obj !== null) ? done(null, true, obj) : done(err)
    } catch (error) {
      done(err)
    }
  })
  
}
)

passport.use(withBearer)
export const requireJWTAuth = passport.authenticate('bearer', { session: false })