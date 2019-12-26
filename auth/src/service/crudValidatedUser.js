import db from '../mysql'
import userModel from '../model/user'
import { validatedUser } from '../service/auth'
import { createInformation } from '../crud/information'
export const createValidatedUserData = async (data, username, role) => {
    try {
        const newUserValidate = await createInformation(data, username)
        validatedUser(username)
        return ({ status: 200, data: newUserValidate })
    } catch (e) {
        return { message: "คุณเคยยืนยันตัวตนไปแล้ว" }
    }
}

export const getUserDatail = async (username) => {

    // return await db.user.findOne({
    //     where: { username }
    // })
}
