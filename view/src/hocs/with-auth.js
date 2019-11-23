import React from 'react'
import { checkAuth } from '../modules/authentication/api/auth'
export default (Component) => {
  const state = {
    isAuth: null,
    username: '',
  }
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
      checkAuth()
        .then((res) => {
          this.setState({
            isAuth: true,
            username: res.data.username,
          })
        })
        .catch((e) => {
          this.setState({
            isAuth: false,
            username: undefined
          })
        })
    }

    render() {
      return <Component {...this.props } auth={this.state}/>
    }
  }
}
