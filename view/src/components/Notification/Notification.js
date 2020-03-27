import { notification } from 'antd'
export const openNotificationWithIcon = (type, title) => {
  notification[type]({
    message: title,
    duration: 3,
  })
}
