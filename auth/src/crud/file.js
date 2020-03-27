import db from '../mysql'
export const putFileUrl = async (data) => {
  const newUserValidate = await db.sequelize.transaction((t) => {
    return db.file.create(data, { transaction: t })
  })
  return newUserValidate
}
