export const setAuth = (authDesc) => ({
  type: 'SET_AUTH',
  payload: {
    authDesc,
  },
})

export const setUserFromContract = () => ({
  type: 'SET_USER_FROM_CONTRACT',
})

export const setUserFromContractSuccess = (user) => ({
  type: 'SET_USER_FROM_CONTRACT_SUCCESS',
  payload: {
    user,
  },
})

export const setUserFromContractFail = (error) => ({
  type: 'SET_USER_FROM_CONTRACT_FAIL',
  payload: {
    error,
  },
})
