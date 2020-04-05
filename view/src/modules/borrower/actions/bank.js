export const getBank = (state = '') => ({
  type: 'LOADING_BANK',
  payload: {
    state,
  },
})
export const getBankSuccess = (data, emptyBankList) => ({
  type: 'LOADING_BANK_SUCCESS',
  payload: {
    data,
    emptyBankList,
  },
})
export const getBankFail = (error) => ({
  type: 'LOADING_BANK_FAIL',
  payload: {
    error,
  },
})
export const openAddBankModal = () => ({
  type: 'OPEN_ADD_BANK_MODAL',
})
export const closeAddBankModal = () => ({
  type: 'CLOSE_ADD_BANK_MODAL',
})
export const addBank = (data) => ({
  type: 'ADD_BANK',
  payload: {
    data,
  },
})
export const addBankSuccess = () => ({
  type: 'ADD_BANK_SUCCESS',
})
export const addBankFail = () => ({
  type: 'ADD_BANK_FAIL',
})
export const resetState = () => ({
  type: 'RESET_STATE',
})
