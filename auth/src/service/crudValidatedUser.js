import db from '../mysql'
import userModel from '../model/user'
import { validatedUser } from '../service/auth'
export const createValidatedUserData = async (data, username, role) => {
    try {
        const isCreated = await db[`${role}`].findOne({
            where: { username }
        })
        const addressJSON = JSON.stringify(data.profile.address)
        await validatedUser(username)
        console.log(isCreated)
        if (!isCreated) {
            const newUserValidate = await db.sequelize.transaction(t => {
                return db[`${role}`].create({
                    username: username,
                    firstName: data.profile.thaiFirstName,
                    lastName: data.profile.thaiLastName,
                    birthDate: data.profile.birthDate,
                    phoneNumber: data.profile.mobile,
                    citizenId: data.profile.citizenID,
                    address: addressJSON
                }, { transaction: t });
            });

            return ({ status: 200, data: newUserValidate })
        }
        return { message: 'คุณเคยผูกบัญชีแล้ว' }

    } catch (e) {
        console.log(e)
        await userModel.updateOne({
            username: username
        },
            {
                isIdentify: false
            })
        return { message: e }
    }
}

export const getUserDatail = async (username, role) => {

    return await db[`${role}`].findOne({
        where: { username }
    })
}
