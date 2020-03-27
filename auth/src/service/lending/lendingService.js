import { updateRequest, getRequestById } from '../../crud/request'
import { getUserById } from '../../crud/user'
import { createLog } from '../../crud/requestlog'

export const changeRequestState = async ({ requestId, state, userId }) => {
  try {
    switch (state) {
      case 'APPROVE_INIT':
        return await appoveInit(requestId, 'CHECKED', userId)
      case 'REJECT':
        return await rejectInit(requestId, userId)
    }
  } catch (error) {
    console.log(error)
    return { message: 'error' }
  }
}

const appoveInit = async (requestId, state, adminId) => {
  if (
    (await checkRepeatState(requestId, state)) &&
    (await checkRepeatState(requestId, 'REJECT'))
  ) {
    try {
      const admin = await getUserById(adminId)
      const requestData = {
        state,
      }
      await createLog(
        `change INIT to CHECKED by ${admin.get().username}`,
        requestId,
      )
      await updateRequest(requestId, requestData)
      return { status: 200 }
    } catch (error) {
      console.log(error)
      return { status: 400, message: 'Something went wrong.' }
    }
  } else {
    return { status: 400, message: 'This request has been done.' }
  }
}

const rejectInit = async (requestId, adminId) => {
  try {
    if (await checkRepeatState(requestId, 'REJECT')) {
      const admin = await getUserById(adminId)
      await updateRequest(requestId, { state: 'REJECT' })
      await createLog(
        `change INIT to REJECED by ${admin.get().username}`,
        requestId,
      )
      return { status: 200 }
    } else {
      return { status: 400, message: 'This request has been rejected.' }
    }
  } catch (error) {
    console.log(error)
    return { status: 400, message: 'Something went wrong.' }
  }
}

const checkRepeatState = async (requestId, state) => {
  const query = await getRequestById(requestId)
  return query.get().state !== state ? true : false
}
