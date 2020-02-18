import { createSession, adminAuthen } from '../../service/auth/signinService'
import { status400, status200, status401 } from '../../utils/status'
export default async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  }
  let isUserInDatabase = await adminAuthen(user)
  if (isUserInDatabase) {
    status200(res, {
      token: await createSession(user, 'admin'),
    })
  } else if (!isUserInDatabase) {
    status401(res, {
      message: 'Your username or password is wrong.',
    })
  } else {
    status400(res)
  }
}
