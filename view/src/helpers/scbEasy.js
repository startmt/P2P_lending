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
