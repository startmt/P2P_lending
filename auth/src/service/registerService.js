import db from '../mysql'

export const checkExistUser = async (user) => {
  try {
    const data = await db.user.findOne({
      where: { username: user.username }
    })
    if (data) {
      return true
    }
    return false
  } catch (e) {
    return false
  }
}

export const create = async (user) => {
  try {
    await db.sequelize.transaction(t => {
      return db.user.create({
        username: user.username,
        password: user.password,
        identify: false,
        role: user.role,
      }, { transaction: t });
    });
    return ({ status: 200})
  } catch (error) {
    return false
  }
}
