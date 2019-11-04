import Header from './header'
import styled from 'styled-components'
import { Fragment } from 'react'
import Navbar from '../components/Navbar'
const Layout = (props) => (
  <Fragment>
    <Header />
    <Navbar/>
    {props.children}
  </Fragment>
)
export default Layout

const Background = styled.div`
  background: url('../static/bg.jpg') no-repeat center center fixed; 
  width: 100%;
  height: 85vh;
}
`
