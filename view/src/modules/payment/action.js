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
