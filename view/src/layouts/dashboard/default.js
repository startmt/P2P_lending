import React, { useState, useEffect } from 'react'
import Heading from './header'
import { Layout, Icon } from 'antd'
import Sidebar from '~/components/Sidebar'
import '~/static/styles.less'
import { compose } from 'redux'
import withAuth from '~/hocs/with-auth'
import withIntl from '../../hocs/with-intl'
const { Content, Header, Sider } = Layout
const DefaultLayout = (props) => {
  useEffect(() => {
    if (props.auth) {
      if (props.auth.username !== '') {
        props.setUsername(
          props.auth.username,
          true,
          props.auth.isIdentify,
        )
      } else {
        props.setUsername(null, false, null)
      }
    }
  })

  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}>
        <Sidebar />
      </Sider>
      <Layout>
        <Heading />
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  )
}

export default compose(
  withIntl,
  withAuth,
)(DefaultLayout)
