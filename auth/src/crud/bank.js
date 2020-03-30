import db from '../mysql'
import { getUserByUsername } from './user'
export const getBankByUsername = async (username, state) => {
  try {
    const user = await getUserByUsername(username)
    const query = {
      userId: user.get().id,
    }
    if (state) query.state = state
    return await db.bank.findAll({
      where: query,
      raw: true,
      order: [['state', 'DESC']],
    })
  } catch (error) {
    console.log(error)
    return { status: 400, message: `can't get bank account` }
  }
}

const getRepeatAccount = async (username, bank_account) => {
  try {
    const user = await getUserByUsername(username)

    const isRepeat = await db.bank.findOne({
      where: { userId: user.get().id, bankAccount: bank_account },
    })
    return { status: 400, data: isRepeat.get() }
  } catch (error) {
    return { status: 200, message: `not repeat` }
  }
}
export const addBank = async (username, bank_account, name, transferId) => {
  try {
    const user = await getUserByUsername(username)
    const isRepete = await getRepeatAccount(username, bank_account)

    console.log(isRepete.status)
    if (isRepete.status == 200) {
      await db.sequelize.transaction(async (t) => {
        const request = await db.bank.create(
          {
            bankAccount: bank_account,
            name,
            state: 'CREATED',
            transferId: transferId,
            userId: user.get().id,
          },
          { transaction: t },
        )
        return request
      })
      return { status: 200, data: { message: 'created bank account' } }
    }
    return { status: 400, message: `repeat bank` }
  } catch (error) {
    console.log(error)
    return { status: 400, message: `can't add bank` }
  }
}
export const verifyBank = async (transferId) => {
  try {
    await db.sequelize.transaction((t) => {
      return db.bank.update(
        { state: 'VERIFIED' },
        { where: { transferId } },
        { transaction: t },
      )
    })
  } catch (e) {
    console.log(e)
    return { message: 'error' }
  }
}
