export const getCurrentContract = (address) => ({
  type: 'GET_CURRENT_CONTRACT_TENOR',
  payload: {
    address,
  },
})

export const getContractList = (address, tenor) => ({
  type: 'GET_CONTRACT_LIST',
  payload: {
    address,
    tenor,
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
