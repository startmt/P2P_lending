import { updateRequest, getRequestById } from '../../crud/request'
import { getUserById } from '../../crud/user'
import { createLog } from '../../crud/requestlog'

export const changeRequestState = async ({ requestId, state, userId }) => {
  switch (state) {
    case 'APPROVE_INIT':
      return await appoveInit(requestId, 'CHECKED', userId)
  }
}

const appoveInit = async (requestId, state, adminId) => {
  if (await checkRepeatState(requestId, state)) {
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

const checkRepeatState = async (requestId, state) => {
  const query = await getRequestById(requestId)
  return query.get().state !== state ? true : false
}
