export const register = (username, password, role) => ({
  type: 'REGISTER',
  payload: {
    username,
    password,
    role,
  },
})
export const registerSuccess = () => ({
  type: 'REGISTER_SUCCESS',
})
export const registerFail = (error) => ({
  type: 'REGISTER_FAIL',
  payload: {
    error,
  },
})

export const resetState = () => ({
  type: 'RESET_STATE',
})
