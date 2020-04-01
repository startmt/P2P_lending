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

export const getLendingList = () => ({
  type: 'GET_CHECK_LENDING_LIST',
})
export const getLendingSuccess = (data) => ({
  type: 'GET_CHECK_LENDING_LIST_SUCCESS',
  payload: data,
})
export const getLendingListFail = () => ({
  type: 'GET_CHECK_LENDING_LIST_FAIL',
})

export const getLendingData = (id) => ({
  type: 'GET_LENDING_DATA',
  payload: { id },
})

export const getLendingDataSuccess = (data) => ({
  type: 'GET_LENDING_DATA_SUCCESS',
  payload: { data },
})
export const getLendingDataFail = () => ({
  type: 'GET_LENDING_DATA_FAIL',
})
