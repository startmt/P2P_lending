import React, { useState } from 'react'
import Heading from './header'
import { Layout, Icon } from 'antd'
import Sidebar from '~/components/Sidebar'
import '~/static/styles.less'
const { Content, Header, Sider } = Layout
const DefaultLayout = (props) => {
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
export default DefaultLayout
