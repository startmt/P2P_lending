import userModel from '../model/user'

export const checkAuth = async (username) =>(
    await userModel
    .findOne({
      username: username,
    })
    .exec())
export const validatedUser = async (username)=>{
  await userModel.updateOne({
    username:username
  },
  {
    isIdentify:true
  })
}