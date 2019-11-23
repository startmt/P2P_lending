export const setUsername = (
  username,
  isAuth,
  isIdentify,
) => ({
  type: 'SET_USERNAME',
  payload: {
    isAuth,
    username,
    isIdentify,
  },
})
