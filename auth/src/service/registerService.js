import userModel from '../model/user'

export const checkExistUser = async (user) => {
  const query = await userModel
    .findOne(
      {
        username: user.username
      },
    )
    .exec()
  try {
    if (query) {
      return true
    }
    return false
  } catch (error) {
    return null
  }
}


export const create = async (user) => {
  try {
    await userModel.create(user)
    return true
  } catch (error) {
    return false
  }
}  