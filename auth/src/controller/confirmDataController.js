import {
    checkToken,
    confirmData
} from '../service/scbVerifyService'
import {
    status400,
    status422,
    status200,
} from '../utils/status'
import { createValidatedUserData } from '../service/crudValidatedUser'
import userModel from '../model/user'

export default async (req, res) => {
    try {
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            citizenId: req.body.citizenId
        }
        const username = req.authInfo.username
        const token = await checkToken(username)
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
            if(query.isIdentify == false){
            const isDataconfirm = await confirmData(config, data)
            const isCreated = await createValidatedUserData(isDataconfirm.data.data, username, query.role)
                if (isCreated.status === 200) return status200(res, isCreated)
                return status400(res,   isCreated.message)
            }
            return status400(res, 'ข้อมูลมีการยืนยันแล้ว')
        } else {
            status422(res, 'your token has expired.')
        }
    } catch (e) {
        console.log(e)
        return status400(res)
    }

}
