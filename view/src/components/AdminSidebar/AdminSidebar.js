import { Menu, Icon } from 'antd'
import './styles.less'
import Link from 'next/link'
import { pageSelector } from '~/modules/query/selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
const Sidebar = ({ pageName, handleLogout }) => {
  return (
    <Menu
      className="sidebar"
      theme="dark"
      defaultSelectedKeys={pageName}
      selectedKeys={pageName}
      mode="inline">
      <Menu.Item key="adminMain">
        <Icon type="home" />
        <Link href="/admin/main" prefetch>
          <span>หน้าหลัก</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="adminRequest">
        <Icon type="user" />
        <Link href="/admin/request" prefetch>
          <span>ตรวจสอบใบคำร้อง</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="logout" />
        <span onClick={handleLogout}>Logout</span>
      </Menu.Item>
    </Menu>
  )
}
const mapStateToProps = (state, props) =>
  createStructuredSelector({
    pageName: pageSelector.getNamePage,
  })(state, props)
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)
