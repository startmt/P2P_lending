import db from '../mysql'
import { getScbByUsername } from './scb'
export const getInfomationByUsername = async (username) => {
  const query = await getScbByUsername(username)
  return db.infomation.findOne({
    where: { scbId: query.get().id },
  })
}

export const createInformation = async (data, username) => {
  const scb = await getScbByUsername(username)
  const addressJSON = JSON.stringify(data.profile.address)
  const newUserValidate = await db.sequelize.transaction((t) => {
    return db.infomation.create(
      {
        scbId: scb.get().id,
        username: username,
        firstName: data.profile.thaiFirstName,
        lastName: data.profile.thaiLastName,
        birthDate: data.profile.birthDate,
        phoneNumber: data.profile.mobile,
        citizenId: data.profile.citizenID,
        address: addressJSON,
      },
      { transaction: t },
    )
  })
  return newUserValidate
}
