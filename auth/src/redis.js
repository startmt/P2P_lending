import redis from 'redis'
import env from './config'
import bluebird from 'bluebird'
let instance = null
bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)
export const connectRedis = () => {
  instance = redis.createClient({ host: env.REDIS_HOST, no_ready_check: true })
  instance.on('connect', function() {
    console.log('redis connected')
  })
}

export const getInstance = () => {
  if (instance === null) {
    connectRedis()
  }
  return instance
}
