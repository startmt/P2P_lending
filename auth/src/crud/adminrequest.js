import db from '../mysql'
export const createTransactionAdminRequest = async (data) => {
  try {
    await db.sequelize.transaction((t) => {
      return db.requestAdmin.create(data, { transaction: t })
    })
  } catch (e) {
    console.log(e)
  }
}
