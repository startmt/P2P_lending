import { getRequestByState } from '../../crud/request'

export const getLendingRequest = async () => {
  try {
    return { status: 200, data: await getRequestByState('INIT') }
  } catch (e) {
    return { status: 400, message: 'error query' }
  }
}
