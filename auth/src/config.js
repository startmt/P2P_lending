export default {
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  SECRET_KEY: process.env.SECRET_KEY || 'EZMAK',
  LENDING_HOST: process.env.LENDING_HOST || 'localhost:3001',
}