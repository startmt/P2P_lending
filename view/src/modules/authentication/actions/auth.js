export const setUsername = (isAuth, username) => ({
  type: 'SET_USERNAME',
  payload: {
    isAuth,
    username,
  },
})
