import env from '../config'
import axios from 'axios'
export const getTokenScb = async(authCode)=>{
    return await axios.post(
        'https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token',
        {
          applicationKey: env.SCB_API,
          applicationSecret: env.SCB_SECRET,
          authCode: authCode,
        },
        {
          headers: {
            resourceOwnerId: env.SCB_API,
            requestUId: "aowwaikon",
            'response-channel': 'mobile',
            endState: 'mobile_app',
            'accept-language': 'EN',
          },
        },
      ).catch(err => (err.response))
}