import React, { Fragment } from 'react'
import { compose } from 'redux'
import withRedux from '../hocs/with-redux'
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu
const Navbar = () => (
  <Fragment>
    <Menu
      mode="horizontal">
      <Menu.Item key="mail">
        <Icon type="mail" />
        หน้าแรก
      </Menu.Item>
      <Menu.Item key="app">
        <Icon type="appstore" />
        เกี่ยวกับเรา
      </Menu.Item>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="user" />
            นักลงทุน
          </span>
        }>
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a
          href="https://ant.design"
          target="_blank"
          rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  </Fragment>
)
const mapStateToProps = null
const mapDispatchToProps = null

export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Navbar)
