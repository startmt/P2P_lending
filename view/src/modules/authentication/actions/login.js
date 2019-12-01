export const login = (username, password, role) => ({
    type: 'LOGIN',
    payload: {
      username,
      password,
      role,
    },
  })
  export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
  })
  export const loginFail = (error) => ({
    type: 'LOGIN_FAIL',
    payload: {
      error,
    },
  })
  export const resetState = () => ({
    type: 'RESET_STATE',
  })
  