import {
    checkToken,
    confirmData
} from '../service/scbVerifyService'
import {
    status400,
    status422,
    status200,
} from '../utils/status'
import userModel from '../model/user'
export default async (req, res) => {
    const data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        citizenId: req.body.citizenId 
    }
    const username = req.authInfo.username
    const token = await checkToken(username)
    console.log('token', token)
    if (token) {
        const query = await userModel
            .findOne({
                username: username,
            })
            .exec()
        const config = {
            headers: {
                resourceOwnerId: query.scbId,
                requestUId: username + 'confirm',
                "accept-language": 'en',
                authorization: 'bearer ' + token
            }
        }
        const isDataconfirm = await confirmData(config, data)
        console.log()
        if(isDataconfirm) return status200(res,isDataconfirm.data)
        else return status400(res)
    } else {
        status422(res, 'your token has expired.')
    }
}
