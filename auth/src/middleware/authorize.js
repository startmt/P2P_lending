import passport from 'passport'
import BearerStrategy from 'passport-http-bearer'
import tokenModel from '../model/token'
const withBearer = new BearerStrategy(async (token, done) => {
  const query = await tokenModel.findOne({
    jwt: token
  }).exec()
  try {
    await (query.jwt == token) ? done(null, true) : done(null, false)
  } catch (error) {
    done(null, false)
  }
}
)
passport.use(withBearer)
export const requireJWTAuth = passport.authenticate('bearer', { session: false })