import {
  checkUserFromDb,
  createSession,
} from '../../service/auth/signinService'
import { status400, status200, status401 } from '../../utils/status'
import { getUserByUsername } from '../../crud/user'
export default async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  }
  let isUserInDatabase = await checkUserFromDb(user)
  if (isUserInDatabase) {
    const userDetail = await getUserByUsername(req.body.username)
    status200(res, {
      token: await createSession(user, userDetail.get().role),
    })
  } else if (!isUserInDatabase) {
    status401(res, {
      message: 'Your username or password is wrong.',
    })
  } else {
    status400(res)
  }
}
