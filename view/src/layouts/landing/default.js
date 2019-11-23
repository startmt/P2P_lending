import Header from './header'
import { Fragment } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Layout } from 'antd'
import '~/static/styles.less'
import { compose } from 'redux'
import withAuth from '~/hocs/with-auth'
const { Content } = Layout
const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Content>{props.children}</Content>
    </Fragment>
  )
}
export default compose(withAuth)(DefaultLayout)
