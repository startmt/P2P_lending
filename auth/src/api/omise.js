import env from '../config'
import axios from 'axios'
export const addBankForRecieveMoney = async (
  username,
  name,
  bank_code,
  number,
) => {
  return await axios
    .post(
      env.OMISE_HOST + '/recipients',
      {
        name: username,
        type: 'individual',
        metadata: {
          username: username,
        },
        bank_account: {
          brand: bank_code,
          number: number,
          name: name,
        },
      },
      { auth: { username: 'skey_test_5hu9iykyg1qw218pezq' } },
    )
    .catch((err) => err.response)
}

export const withdrawnCash = async (amount, recipient) => {
  return await axios
    .post(
      env.OMISE_HOST + '/transfers',
      {
        amount,
        recipient,
      },
      { auth: { username: 'skey_test_5hu9iykyg1qw218pezq' } },
    )
    .catch((err) => err.response)
}
