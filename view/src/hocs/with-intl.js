import React from 'react'
export default (Component) => {
  return class extends React.Component {
    static async getInitialProps(context) {
      let composedProps = {}
      if (Component.getInitialProps) {
        composedProps = await Component.getInitialProps({
          ...context,
        })
      }
      return composedProps
    }
    componentDidMount() {
      window.history.replaceState(
        {},
        '',
        this.props.url.pathname,
      )
    }

    render() {
      return <Component {...this.props} />
    }
  }
}
