export default {
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
  SECRET_KEY: process.env.SECRET_KEY || 'EZMAK',
  OMISE_HOST: process.env.OMISE_HOST || 'https://api.omise.co',
  LENDING_HOST: process.env.LENDING_HOST || 'localhost:3001',
  SCB_API: 'l7b5616b7185e143c9a380033362b5f324',
  SCB_SECRET: 'e48a5b88876f48708e4ac495fb4705d9',
  MINIO_ACCESS_KEY: 'minio',
  MINIO_SECRET_KEY: 'minio123',
  MINIO_ENDPOINT: process.env.MINIO_ENDPOINT || '127.0.0.1',
  MINIO_PORT: process.env.MINIO_PORT || 9001,
  MINIO_SECURITY: process.env.MINIO_SECURITY || false,
  MINIO_BUCKET: process.env.MINIO_BUCKET || '',
}
