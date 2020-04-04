export const getCurrentContract = (address) => ({
  type: 'GET_CURRENT_CONTRACT_TENOR',
  payload: {
    address,
  },
})

export const getCurrentContractSuccess = (data) => ({
  type: 'GET_CURRENT_CONTRACT_TENOR_SUCCESS',
  payload: {
    data,
  },
})
