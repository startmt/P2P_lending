import db from '../mysql'
export const getCheckedRequest = async () => {
  return db.request.findAll({
    where: { state: 'CHECKED' },
  })
}

export const getCheckedRequestById = async (id) => {
  return db.request.findOne({
    where: { state: 'CHECKED', id: id },
    include: [
      {
        model: db.requestlog,
        where: { requestId: id },
      },
    ],
    order: [[db.requestlog, 'createdAt', 'DESC']],
  })
}

export const getRequestByUserList = async (userId) => {
  return db.request.findAll({
    include: [
      {
        model: db.requestuser,
        where: { userId },
      },
      {
        model: db.contract,
      },
    ],
    raw: true,
  })
}

export const getRequestByState = async (state) => {
  return db.request.findAll({
    where: {
      state,
    },
    raw: true,
  })
}

export const getRequestByIdState = async (id, state) => {
  return db.request.findOne({
    where: { id, state },
    include: [
      {
        model: db.file,
      },
    ],
  })
}
export const getRequestById = async (id) => {
  return db.request.findOne({
    where: { id },
    include: [
      {
        model: db.requestlog,
      },
    ],
    order: [[db.requestlog, 'createdAt', 'DESC']],
  })
}

export const lenderAcceptRequest = async (userId, requestId) => {
  const request = await db.sequelize.transaction(async (t) => {
    return await db.requestuser.create(
      {
        userId,
        requestId,
      },
      { transaction: t },
    )
  })
  return request
}

export const initRequest = async (data, id) => {
  try {
    const request = await db.sequelize.transaction(async (t) => {
      const request = await db.request.create(data, { transaction: t })
      await db.requestuser.create(
        {
          userId: id,
          requestId: request.get().id,
        },
        { transaction: t },
      )
      return request
    })
    const returnData = {
      status: 200,
      data: request.get(),
    }
    return returnData
  } catch (e) {
    return { message: 'error' }
  }
}

export const updateRequest = async (id, data) => {
  try {
    await db.sequelize.transaction((t) => {
      return db.request.update(data, { where: { id } }, { transaction: t })
    })
  } catch (e) {
    console.log(e)
    return { message: 'error' }
  }
}
