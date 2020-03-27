import { getInstance } from '../../redis'
const redisClient = getInstance()
export const setLoadingBlockchain = async (username) => {
  redisClient.set('loading' + username, 1, 'EX', 310)
}

export const deleteLoading = async (username) => {
  redisClient.del('loading' + username)
}

export const getLoading = async (username) => {
  const data = await redisClient.getAsync('loading' + username)
  if (data) {
    return { result: await redisClient.getAsync('loading' + username) }
  } else {
    return { error: 'error' }
  }
}
