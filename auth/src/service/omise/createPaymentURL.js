import axios from 'axios'
import env from '../../config'
export default async (amount, type, userData) => {
  const source = await axios.post(
    env.OMISE_HOST + '/sources',
    {
      amount,
      currency: 'thb',
      type,
    },
    { auth: { username: 'skey_test_5hu9iykyg1qw218pezq' } },
  )

  return await axios.post(
    env.OMISE_HOST + '/charges',
    {
      metadata: userData,
      amount,
      currency: 'thb',
      return_uri: `${env.HOST}/`,
      source: source.data.id,
    },
    { auth: { username: 'skey_test_5hu9iykyg1qw218pezq' } },
  )
}
