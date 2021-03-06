import db from '../mysql'
export const getUserByUsername = async (username) =>
  await db.user.findOne({
    where: { username: username },
  })
export const getUserById = async (id) =>
  await db.user.findOne({
    where: { id },
  })
export const createUser = async (user) =>
  await db.sequelize.transaction((t) => {
    return db.user.create(
      {
        username: user.username,
        password: user.password,
        identify: false,
        role: user.role,
      },
      { transaction: t },
    )
  })
export const updateUser = async (id, data) => {
  try {
    await db.sequelize.transaction((t) => {
      return db.user.update(data, { where: { id: id } }, { transaction: t })
    })
  } catch (e) {
    console.log(e)
  }
}
