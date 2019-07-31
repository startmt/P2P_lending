import { status400, status200, status401 } from '../utils/status'
export default async (req, res) => {
  const user = {
      token: req.headers.authorization
  }
  req.logout();
  res.redirect('/');
}