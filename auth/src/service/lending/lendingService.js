import { updateRequest, getRequestById } from '../../crud/request'
import { createTransactionAdminRequest } from '../../crud/adminrequest'

export const changeRequestState = async ({ requestId, state, adminId }) => {
  switch (state) {
    case 'APPROVE_INIT':
      return await appoveInit(requestId, 'CHECKED', adminId)
  }
}

const appoveInit = async (requestId, state, adminId) => {
  if (await checkRepeatState(requestId, state)) {
    try {
      const requestData = {
        state,
      }
      const requestAdminData = {
        description: 'change INIT to CHECKED',
        adminId,
        requestId,
      }
      await updateRequest(requestId, requestData)
      await createTransactionAdminRequest(requestAdminData)
      return { status: 200 }
    } catch (error) {
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
