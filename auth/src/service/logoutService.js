import redis from 'redis'
const redisCLient = redis.createClient()

export const clearSession = async (token) => redisCLient.del(token)