import db from '../mysql'

export const checkAuth = async (username) =>(
    await db.user
    .findOne({
      username: username,
    })
)
export const validatedUser = async (username)=>{
  await userModel.updateOne({
    username:username
  },
  {
    isIdentify:true
  })
}