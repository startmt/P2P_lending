import db from '../mysql'
export const getCheckedRequest = async () => {
    return db.request.findOne({
        where: { state: 'CHECKED' }
    })
}

export const getCheckedRequestById = async (id) => {
    return db.request.findOne({
        where: { state: 'CHECKED', id }
    })
}

// export const initRequeest = async (data) => {
//     return db.request.findOne({
//         where: { state: 'CHECKED', id }
//     })
// }