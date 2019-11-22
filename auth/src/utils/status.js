export const status200 = (res, data) => {
  return res.status(200).json(data)
}

export const status400 = (res, message='Something went wrong.') => {
  return res.status(400).json({ message: message })
}

export const status401 = (res, data) => {
  return res.status(401).json(data)
}


export const status422 = (res, data) => {
  return res.status(422).json(data)
}