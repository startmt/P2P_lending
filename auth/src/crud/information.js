import db from '../mysql'
import { getScbByUsername } from './scb'
export const getInfomationByUsername = async (username) => {
  const query = await getScbByUsername(username)
  return db.infomation.findOne({
    where: { scbId: query.get().id },
  })
}
//can't reuse
export const createInformation = async (data, username) => {
  const scb = await getScbByUsername(username)
  const addressJSON = JSON.stringify(data.user.profile.address)
  const newUserValidate = await db.sequelize.transaction((t) => {
    return db.infomation.create(
      {
        scbId: scb.get().id,
        username: username,
        firstName: data.user.profile.thaiFirstName,
        lastName: data.user.profile.thaiLastName,
        birthDate: data.user.profile.birthDate,
        phoneNumber: data.user.profile.mobile,
        citizenId: data.user.profile.citizenID,
        address: addressJSON,
        blockData: data.blockData,
      },
      { transaction: t },
    )
  })
  return newUserValidate
}
