import db from '../mysql'
export const getCheckedRequest = async () => {
    return db.request.findAll({
        where: { state: 'CHECKED' }
    })
}

export const getCheckedRequestById = async (id) => {
    return db.request.findOne({
        where: { state: 'CHECKED', id }
    })
}

export const initRequest = async (data, id) => {
    try {
        const request = await db.sequelize.transaction(async (t) => {
            const request = await db.request.create(data, { transaction: t });
            await db.requestuser.create({
                userId: id,
                requestId: request.get().id
            }, { transaction: t });
            return request
        });
        const returnData = {
            status: 200,
            data: request.get()
        }
        return returnData
    } catch (e) {
        return { message: 'error' }
    }

}