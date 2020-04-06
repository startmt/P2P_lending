export const getCurrentContract = (address) => ({
  type: 'GET_CURRENT_CONTRACT_TENOR',
  payload: {
    address,
  },
})

export const getContractList = (address) => ({
  type: 'GET_CONTRACT_LIST',
  payload: {
    address,
  },
})

export const getContractListSuccess = (data) => ({
  type: 'GET_CONTRACT_LIST_SUCCESS',
  payload: {
    data,
  },
})

export const getCurrentContractSuccess = (data) => ({
  type: 'GET_CURRENT_CONTRACT_TENOR_SUCCESS',
  payload: {
    data,
  },
})

export const getLog = (requestId) => ({
  type: 'GET_LOGS',
  payload: {
    requestId,
  },
})

export const getLogSuccess = (data) => ({
  type: 'GET_LOGS_SUCCESS',
  payload: {
    data,
  },
})
