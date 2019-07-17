import {
    checkUserFromDb,
    createJwt
} from '../service/signinService'
import { status400, status200, status401 } from '../utils/status'
export default async (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let user = await checkUserFromDb(username, password)
    
    if (user) {
        status200(res, { token: await createJwt(user) })
    }
    else if (!user) {
        status401(res, { message: 'Your username or password is wrong.' })
    }
    else {
       status400(res)
    }

}