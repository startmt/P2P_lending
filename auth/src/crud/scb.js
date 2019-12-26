import db from '../mysql'
import { getUserByUsername } from './user'
export const getScbByUsername = async (username) => {
    const query = await getUserByUsername(username)
    return db.scb.findOne({
        where: { userId: query.get().id }
    })
}

export const createScb = async (username, scbAccount) => {
    const query = await getUserByUsername(username)
    return await db.sequelize.transaction(t => {
        return db.scb.create({
            userId: query.get().id,
            scbAccount
        }, { transaction: t });
    });

}