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
