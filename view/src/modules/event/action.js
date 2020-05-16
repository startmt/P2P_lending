export const createLending = (data) => ({
  type: 'CREATE_LENDING',
  payload: {
    data,
  },
})
export const createLendingSuccess = () => ({
  type: 'CREATE_LENDING_SUCCESS',
})

export const createLendingFail = () => ({
  type: 'CREATE_LENDING_FAIL',
})

export const openModal = () => ({
  type: 'CREATE_LENDING_OPEN_MODAL',
})
export const closeModal = () => ({
  type: 'CREATE_LENDING_CLOSE_MODAL',
})
