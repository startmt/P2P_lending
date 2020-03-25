import db from '../mysql'
export const createLog = async (log, requestId) => {
  try {
    console.log(log, requestId)
    return await db.sequelize.transaction(async (t) => {
      const request = await db.requestlog.create(
        {
          log: log,
          requestId: requestId,
        },
        { transaction: t },
      )
      return request
    })
  } catch (e) {
    console.log('error', e)
    return { message: 'error' }
  }
}
