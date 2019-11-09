import React, { Fragment } from 'react'
import { compose } from 'redux'
import withRedux from '../../hocs/with-redux'
import './styles.less'
import { Menu, Icon, Layout, Row, Col } from 'antd'
import { Button } from 'antd/lib/radio'
import { pageSelector } from '~/modules/query/selectors'
import { createStructuredSelector } from 'reselect'
const { Header } = Layout
const { Item } = Menu

const Navbar = ({pageName}) => (
  <Fragment>
    <Header>
      <Menu
        selectedKeys={[pageName]}
        mode="horizontal"
        defaultSelectedKeys={['2']}
        className="menu">
        <Item className="menu-item" key="Landing">
          <Icon type="home" />
          หน้าแรก
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
const mapStateToProps = (state, props) =>
  createStructuredSelector({
    pageName: pageSelector.getNamePage,
  })(state, props)
const mapDispatchToProps = null

export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Navbar)
