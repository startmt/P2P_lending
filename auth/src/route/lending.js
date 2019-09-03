import axios from 'axios'
import env from '../config'
export const lending = () => {
  axios.get(`${env.LENDING_HOST}/lending`)
}