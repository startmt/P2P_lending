import db from '../mysql'
import { updateRequest } from './request'
export const savedContractAddressInDB = async (address, requestId) => {
  try {
    const request = await db.sequelize.transaction(async (t) => {
      const request = await db.contract.create(
        {
          contractDetailId: address,
          requestId: requestId,
        },
        { transaction: t },
      )
      return request
    })
    const returnData = {
      status: 200,
      data: request.get(),
    }
    await updateRequest(requestId, {
      state: 'LENDING_WAIT_BORROWER_ACCEPT_MONEY',
    })
    return returnData
  } catch (e) {
    console.log('error', e)
    return { message: 'error' }
  }
}
