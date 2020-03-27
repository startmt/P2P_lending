import { status400 } from '../utils/status'
export const isAdmin = (role, res) => {
  role === 'admin' ? true : status400(res, 'you are not admin')
}
