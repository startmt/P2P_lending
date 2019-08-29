import redis from 'redis'

let instance = null
const { REDIS_HOST } = process.env

export const connectRedis = () => {
  instance = redis.createClient('6379', REDIS_HOST)
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