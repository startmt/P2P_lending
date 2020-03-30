export const getBank = () => ({
  type: 'LOADING_BANK',
})
export const getBankSuccess = (data) => ({
  type: 'LOADING_BANK_SUCCESS',
  payload: data,
})
export const getBankFail = (error) => ({
  type: 'LOADING_BANK_FAIL',
  payload: {
    error,
  },
})
export const resetState = () => ({
  type: 'RESET_STATE',
})
