import { getInstance } from '../../redis'
const redisClient = getInstance()
export const setLoadingBlockchain = async (username) => {
  redisClient.set('loading' + username, 1, 'EX', 310)
}

export const deleteLoading = async (username) => {
  redisClient.del('loading' + username)
}

export const getLoading = async (username) => {
  return redisClient.getAsync('loading' + username)
}
