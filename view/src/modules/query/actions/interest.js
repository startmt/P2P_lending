export const setInterest = () => ({
  type: 'SET_INTEREST',
})
export const getInterestData = () => ({
  type: 'GET_INTEREST_DATA',
})

export const setInterestSuccess = (interest) => ({
  type: 'SET_INTEREST_SUCCESS',
  payload: {
    interest: interest,
  },
})
export const setInterestData = (interestObj) => ({
  type: 'SET_INTEREST_DATA',
  payload: {
    interest: interestObj.interest,
    fee: interestObj.fee,
  },
})
export const setInterestDataSuccess = (interestObj) => ({
  type: 'SET_INTEREST_DATA_SUCCESS',
  payload: {
    interest: interestObj.interest,
    fee: interestObj.fee,
  },
})
export const setInterestFail = () => ({
  type: 'SET_INTEREST_FAIL',
})
export const setFeeSuccess = (fee) => ({
  type: 'SET_FEE_SUCCESS',
  payload: {
    fee: fee,
  },
})
