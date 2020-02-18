import db from '../mysql'
export const getAdminDataByUsername = async (username) =>
  await db.admin.findOne({
    where: { username: username },
  })
