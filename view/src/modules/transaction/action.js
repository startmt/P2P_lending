export const loading = (requestId, bankName, amount) => ({
  type: 'LOADING_TRANSACTION_LOADING',
  payload: {
    requestId,
    bankName,
    amount: amount + '00',
  },
})

export const loadingSuccess = () => ({
  type: 'LOADING_TRANSACTION_LOADING_SUCCESS',
})
