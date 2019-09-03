import { getInstance } from '../redis'
const redisClient = getInstance()

export const clearSession = async (token) =>
  redisClient.del(token)