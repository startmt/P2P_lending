import axios from 'axios'
import env from '../../config'
export default async (amount, type) => {
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
      description: 'Test',
      amount,
      currency: 'thb',
      return_uri: 'https://www.google.com',
      source: source.data.id,
    },
    { auth: { username: 'skey_test_5hu9iykyg1qw218pezq' } },
  )
}
