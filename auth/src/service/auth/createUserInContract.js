import web3 from '../../service/blockchain/web3'
import { createManner } from '../../service/blockchain/manner'
import { getUserByUsername } from '../../crud/user'
export const createUserInContract = async (username, data) => {
  const user = await getUserByUsername(username)
  const blockData = {
    id: user.get().id,
    firstname: data.firstname,
    lastname: data.lastname,
  }

  const contract = await createManner(blockData)
  return { status: 200, data: { address: contract._address } }
}
