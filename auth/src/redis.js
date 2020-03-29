import redis from 'redis'
import env from './config'
import bluebird from 'bluebird'
let instance = null
bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)
export const connectRedis = () => {
  instance = redis.createClient('6379', env.REDIS_HOST)

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
