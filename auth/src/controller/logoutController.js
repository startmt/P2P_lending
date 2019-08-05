import { clearSession } from '../service/logoutService'
export default async (req, res) => {
  const token = req.body.token
  clearSession(token)
  res.end()
}