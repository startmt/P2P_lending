import React, { useState, useEffect } from 'react'
import Heading from './header'
import { Layout, Icon } from 'antd'
import Sidebar from '~/components/Sidebar'
import { connect } from 'react-redux'
import Route from 'next/router'
import { createStructuredSelector } from 'reselect'
import '~/static/styles.less'
import { authSelector } from '~/modules/authentication/selectors'
import { compose } from 'redux'
import withAuth from '~/hocs/with-auth'
const { Content, Header, Sider } = Layout
const DefaultLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const handleLogout = () => {
    console.log('dd')
    localStorage.clear()
    Route.push('/')
  }
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}>
        <Sidebar handleLogout={handleLogout} />
      </Sider>
      <Layout>
        <Heading />
        <Header style={{ background: '#fff' }}>
          <div className="d-flex h-100 w-100">
            <Icon
              className="trigger d-flex align-items-center"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => setCollapsed(!collapsed)}
            />
            <div className="right-item">
              {props.username
                ? `Hello, ${props.username}`
                : ''}
            </div>
          </div>
        </Header>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  )
}
const mapStateToProps = (state, props) =>
  createStructuredSelector({
    username: authSelector.getUsername,
  })(state, props)
export default compose(
  withAuth,
  connect(
    mapStateToProps,
    null,
  ),
)(DefaultLayout)
