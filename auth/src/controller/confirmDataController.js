import {
    checkToken,
    confirmData
} from '../service/scbVerifyService'
import {
    status400,
    status422,
    status200,
} from '../utils/status'
import { createBorrowerValidated } from '../service/crudBorrower'
import userModel from '../model/user'
import {validatedUser} from '../service/auth'
export default async (req, res) => {
    try{
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
            const isDataconfirm = await confirmData(config, data)
            
            const isCreated = await createBorrowerValidated(isDataconfirm.data.data, username)

            if(isCreated.status === 200) {await validatedUser(username)
                return status200(res,isCreated)
            }
                
                return status400(res)
        } else {
            status422(res, 'your token has expired.')
        }
    } catch(e){
        return status400(res)
    }
    
}
