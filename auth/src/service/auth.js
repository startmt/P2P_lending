import userModel from '../model/user'

export const checkAuth = async (username) =>(
    await userModel
    .findOne({
      username: username,
    })
    .exec())
  