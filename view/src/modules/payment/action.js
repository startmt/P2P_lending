export const payment = (requestId, bankName, amount) => ({
  type: 'PAYMENT',
  payload: {
    requestId,
    bankName,
    amount: amount + '00',
  },
})

export const paymentSuccess = () => ({
  type: 'PAYMENT_SUCCESS',
})

export const withdrawn = (requestId, transferId) => ({
  type: 'WITHDRAWN',
  payload: {
    requestId,
    transferId,
  },
})

export const withdrawnSuccess = () => ({
  type: 'WITHDRAWN_SUCCESS',
})
