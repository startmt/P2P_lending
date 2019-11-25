export const setAuth = (
  username,
  isAuth,
  isIdentify,
) => ({
  type: 'SET_AUTH',
  payload: {
    isAuth,
    username,
    isIdentify,
  },
})
