import Header from './header'
import { Fragment } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Layout } from 'antd'
import '~/static/styles.less'
const { Content } = Layout
const DefaultLayout = (props) => (
  <Fragment>
    <Header />
    <Navbar />
    <Content>{props.children}</Content>
  </Fragment>
)
export default DefaultLayout
