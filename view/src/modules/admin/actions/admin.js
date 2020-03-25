export const resetState = () => ({
  type: 'RESET_STATE',
})

export const getInitRequest = () => ({
  type: 'GET_INIT_REQUEST',
})

export const getInitRequestSuccess = (data) => ({
  type: 'GET_INIT_REQUEST_SUCCESS',
  payload: { data },
})

export const getInitRequestFail = () => ({
  type: 'GET_INIT_REQUEST_FAIL',
})

export const getInitRequestData = (id) => ({
  type: 'GET_INIT_REQUEST_DATA',
  payload: { id },
})

export const getInitRequestDataSuccess = (data) => ({
  type: 'GET_INIT_REQUEST_DATA_SUCCESS',
  payload: { data },
})

export const getInitRequestDataFail = () => ({
  type: 'GET_INIT_REQUEST_DATA_FAIL',
})

export const confirmRequest = (id, state) => ({
  type: 'CONFIRM_INIT_REQUEST_DATA',
  payload: { id, state },
})

export const confirmRequestSuccess = () => ({
  type: 'CONFIRM_INIT_REQUEST_DATA_SUCCESS',
})

export const confirmRequestFail = () => ({
  type: 'CONFIRM_INIT_REQUEST_DATA_FAIL',
})

export const closeInitRequestModal = () => ({
  type: 'CLOSE_INIT_REQUEST_DATA_MODAL',
})
