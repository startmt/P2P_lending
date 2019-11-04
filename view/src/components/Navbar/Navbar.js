import React, { Fragment } from 'react'
import { compose } from 'redux'
import withRedux from '../../hocs/with-redux'
import './styles.scss'
import { Menu, Icon, Layout, Row, Col } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Button } from 'antd/lib/radio'

const { Header } = Layout

const Navbar = () => (
  <Fragment>
    <Header>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        className="menu">
        <Menu.Item key="home">
          <Icon type="mail" />
          หน้าแรก
        </Menu.Item>
        <Menu.Item key="about">
          <Icon type="appstore" />
          เกี่ยวกับเรา
        </Menu.Item>
        <Menu.Item key="borrower">
          <Icon type="appstore" />
          ผู้ขอสินเชื่อ
        </Menu.Item>
        <Menu.Item key="lender">
          <Icon type="appstore" />
          นักลงทุน
        </Menu.Item>
        <div className="right-item">
          <Row>
            <Col span={12}>
              <Button>Login</Button>
            </Col>
            <Col span={12}>
              <Button>Register</Button>
            </Col>
          </Row>
        </div>
      </Menu>
    </Header>
  </Fragment>
)
const mapStateToProps = null
const mapDispatchToProps = null

export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Navbar)
