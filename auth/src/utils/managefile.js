import { Client } from 'minio'
import env from '../config'
import { putFileUrl } from '../crud/file'
const minioClient = new Client({
  endPoint: env.MINIO_ENDPOINT,
  port: Number.parseInt(env.MINIO_PORT),
  useSSL: false,
  accessKey: env.MINIO_ACCESS_KEY,
  secretKey: env.MINIO_SECRET_KEY,
})

export const uploadFile = async (data) => {
  const keyName = Object.keys(data.files)
  keyName.map(async (key) => {
    const upload = await minioClient.putObject(
      key,
      data.prefix + data.files[key].name,
      data.files[key].data,
      data.files[key].size,
      { 'Content-Type': data.files[key].mimetype },
    )
    if (upload) {
      const dataToDb = {
        requestId: data.id,
        fileUrl: `${key}/${data.prefix}${data.files[key].name}`,
        fileDescription: key,
      }
      await putFileUrl(dataToDb)
    }
  })
  return 200
}
