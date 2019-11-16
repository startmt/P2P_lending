import axios from 'axios'
export const authenApplication = () => {
  return axios.get(
    'https://api-sandbox.partners.scb/partners/sandbox/v2/oauth/authorize',
    {
      headers: {
        apikey: 'l7b5616b7185e143c9a380033362b5f324',
        apisecret: 'e48a5b88876f48708e4ac495fb4705d9',
        resourceOwnerId:
          'l7b5616b7185e143c9a380033362b5f324',
        requestUId: 123456789,
        'response-channel': 'mobile',
        endState: 'mobile_app',
        'accept-language': 'EN',
      },
    },
  )
}

export const getSCBToken = (authCode) => {
  window.HttpCli
  return axios.post(
    'https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token',
    {
      applicationKey: 'l7b5616b7185e143c9a380033362b5f324',
      applicationSecret: 'e48a5b88876f48708e4ac495fb4705d9',
      authCode: '09317dd8-4555-42a5-a940-08903fb7c85f',
    },
    {
      headers: {
        'Access-Control-Expose-Headers':
          '*, resourceownerid',
        apikey: 'l7b5616b7185e143c9a380033362b5f324',
        apisecret: 'e48a5b88876f48708e4ac495fb4705d9',
        resourceOwnerId:
          'l7b5616b7185e143c9a380033362b5f324',
        requestUId: 123456789,
        'response-channel': 'mobile',
        endState: 'mobile_app',
        'accept-language': 'EN',
      },
    },
  )
}

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
