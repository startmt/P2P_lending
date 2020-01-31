import { validatedUser } from './auth'
import {
  createInformation,
  getInfomationByUsername,
} from '../../crud/information'
export const createValidatedUserData = async (data, username) => {
  try {
    const newUserValidate = await createInformation(data, username)
    await validatedUser(username)
    return { status: 200, data: newUserValidate }
  } catch (e) {
    return { message: 'คุณเคยยืนยันตัวตนไปแล้ว' }
  }
}

export const getUserDatail = async (username) => {
  return await getInfomationByUsername(username)
}
