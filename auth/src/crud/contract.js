import db from '../mysql'
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
    return returnData
  } catch (e) {
    console.log(e)
    return { message: 'error' }
  }
}
