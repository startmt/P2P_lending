import {
    checkUserFromDb,
    createJwt
} from '../service/signinService'
import { status400, status200, status401 } from '../utils/status'
export default async (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    let isUserInDatabase = await checkUserFromDb(user)
    if (isUserInDatabase) {
        status200(res, { token: await createJwt(user) })
    }
    else if (!isUserInDatabase) {
        status401(res, { message: 'Your username or password is wrong.' })
    }
    else {
       status400(res)
    }

}