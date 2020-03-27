export const getSelfLending = () => ({
  type: 'INIT_MY_LENDING_LIST',
})
export const getSelfLendingSuccess = (data) => ({
  type: 'INIT_MY_LENDING_LIST_SUCCESS',
  payload: data,
})
export const getSelfLendingFail = (error) => ({
  type: 'INIT_MY_LENDING_LIST_FAIL',
  payload: {
    error,
  },
})
export const resetState = () => ({
  type: 'RESET_STATE',
})
