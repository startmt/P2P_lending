import { checkToken, confirmData } from '../../service/auth/scbVerifyService'
import { status400, status200 } from '../../utils/status'
import { createValidatedUserData } from '../../service/auth/crudValidatedUser'
import { getScbByUsername } from '../../crud/scb'
import { createUserInContract } from '../../service/auth/createUserInContract'
export default async (req, res) => {
  try {
    const data = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      citizenId: req.body.citizenId,
    }
    const username = req.authInfo.username
    const token = await checkToken(username)
    if (token) {
      const query = await getScbByUsername(username)
      const config = {
        headers: {
          resourceOwnerId: query.get().scbAccount,
          requestUId: username + 'confirm',
          'accept-language': 'en',
          authorization: 'bearer ' + token,
        },
      }
      const isDataconfirm = await confirmData(config, data)
      const addressBlock = await createUserInContract(username, data)

      const createData = {
        user: isDataconfirm.data.data,
        blockData: addressBlock.data.address,
      }
      const isCreated = await createValidatedUserData(createData, username)
      if (isCreated.status === 200) return status200(res, isCreated)
      return status400(res, isCreated.message)
    } else {
      return status400(res)
    }
  } catch (e) {
    console.log(e)
    return status400(res)
  }
}
