import { getRequestByState, getRequestByIdState } from '../../crud/request'

export const getLendingRequest = async () => {
  try {
    return { status: 200, data: await getRequestByState('INIT') }
  } catch (e) {
    return { status: 400, message: 'error query' }
  }
}

export const getLedingDetail = async (id) => {
  try {
    const data = await getRequestByIdState(id, 'INIT')
    return { status: 200, data }
  } catch (error) {
    console.log(error)
    return { status: 400, message: 'error query' }
  }
}
