import axios from 'axios'

export const getAccountDetail = (
  token,
  resourceOwnerId,
) => {
  return axios.get(
    'https://api-sandbox.partners.scb/partners/sandbox/v1/customers/profile',
    {
      headers: {
        authorization: 'Bearer ' + token,
        resourceOwnerId: resourceOwnerId,
        requestUId: resourceOwnerId,
        'accept-language': 'EN',
      },
    },
  )
}
