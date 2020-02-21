import { Client } from 'minio'
import env from '../config'
const minioClient = new Client({
  endPoint: env.MINIO_ENDPOINT,
  port: env.MINIO_PORT,
  useSSL: false,
  accessKey: env.MINIO_ACCESS_KEY,
  secretKey: env.MINIO_SECRET_KEY,
})

export const uploadFile = async (files, prefix) => {
  const keyName = Object.keys(files)
  keyName.map(async (key) => {
    const a = await minioClient.putObject(
      key,
      prefix + files[key].name,
      files[key].data,
      files[key].size,
    )

    console.log(a)
  })
  return 200
}

export const getFile = async (bucket, fileName) => {
  const url = await minioClient.presignedGetObject(bucket, fileName, 2000)
  return url
}
