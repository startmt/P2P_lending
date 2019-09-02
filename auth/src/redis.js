import redis from 'redis'
import env from './config'

let instance = null
export const connectRedis = () => {
  instance = redis.createClient('6379', env.REDIS_HOST)
  instance.on('connect', function() {
    console.log('redis connected')
  })
}

export const getInstance = () => {
  if (instance === null){
    connectRedis()
  }
  return instance
}