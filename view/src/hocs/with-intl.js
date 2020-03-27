import React, { useEffect } from 'react'
export default (Component) => {
  const withIntl = (props) => {
    useEffect(() => {
      window.history.replaceState(
        {},
        '',
        props.url.pathname,
      )
    }, [])

    return <Component {...props} />
  }

  withIntl.getInitialProps = async (context) => {
    let composedProps = {}
    if (Component.getInitialProps) {
      composedProps = await Component.getInitialProps({
        ...context,
      })
    }
    return composedProps
  }

  return withIntl
}
