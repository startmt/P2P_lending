import React, { Fragment } from 'react'
import './styles.less'
import { Menu, Icon, Layout, Row, Col } from 'antd'
import RegisterModal from './RegisterModal'
import { Button } from 'antd/lib/radio'
import { pageSelector } from '~/modules/query/selectors'
import { authSelector } from '~/modules/authentication/selectors'
import { createStructuredSelector } from 'reselect'
import Link from 'next/link'
import { connect } from 'react-redux'
const { Header } = Layout
const { Item } = Menu

const Navbar = ({ pageName, username, isAuth, handleLogout }) => (
  <Fragment>
    <Header>
      <Menu
        selectedKeys={[pageName]}
        mode="horizontal"
        defaultSelectedKeys={['2']}
        className="menu">
        <Item className="menu-item" key="Landing">
          <Link href="/">
            <a>
              <Icon type="home" />
              หน้าแรก
            </a>
          </Link>
        </Item>
        <Item className="menu-item" key="about">
          <Icon type="info-circle" />
          เกี่ยวกับเรา
        </Item>
        <Item className="menu-item" key="borrower">
          <Icon type="user" />
          ผู้ขอสินเชื่อ
        </Item>
        <Item className="menu-item" key="lender">
          <Icon type="money-collect" />
          นักลงทุน
        </Item>
        <div className="right-item">
          {isAuth ? (
            <Row>
              <Link href="/borrower/main"><a className="mr-2">Console</a></Link>
                  <Button onClick={handleLogout}>ออกจากระบบ</Button>
            </Row>
          ) : (
            <Row>
              <Col span={12}>
                <Link href="/login">
                  <Button>เข้าสู่ระบบ</Button>
                </Link>
              </Col>
              <Col span={12}>
                <Link href="/register">
                <Button>เริ่มต้นใช้งาน</Button>
                </Link>
              </Col>
            </Row>
          )}
        </div>
      </Menu>
    </Header>
  </Fragment>
)
const mapStateToProps = (state, props) =>
  createStructuredSelector({
    pageName: pageSelector.getNamePage,
    isAuth: authSelector.isAuth,
    username: authSelector.getUsername,
  })(state, props)
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar)
