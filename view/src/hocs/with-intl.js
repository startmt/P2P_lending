import React, { useEffect } from 'react'
export default (Component) => (props) => {
  useEffect(() => {
    window.history.replaceState({}, '', props.url.pathname)
  })
  return <Component {...props} />
}
