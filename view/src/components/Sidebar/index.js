import { Menu, Icon } from 'antd'
import './styles.less'
import Link from 'next/link'
import { pageSelector } from '~/modules/query/selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
const Sidebar = ({
  pageName,
  handleLogout,
  role,
  isIdentify,
}) => {
  return (
    <Menu
      className="sidebar"
      theme="dark"
      defaultSelectedKeys={pageName}
      selectedKeys={pageName}
      mode="inline">
      <Menu.Item key="borrowerMain">
        <Icon type="home" />
        <Link href="/user/main">
          <span>หน้าหลัก</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="userProfile">
        <Icon type="user" />
        <Link href="/user/profile">
          <span>ข้อมูลส่วนตัว</span>
        </Link>
      </Menu.Item>
      {role === 'lender' && isIdentify && (
        <Menu.Item key="lending">
          <Icon type="file-add" />
          <Link href="/user/lending">
            <span>คำร้องการกู้เงิน</span>
          </Link>
        </Menu.Item>
      )}
      {isIdentify && (
        <Menu.Item key="myContract">
          <Icon type="snippets" />
          <Link href="/user/my">
            <span>ใบสัญญาเงินกู้ของฉัน</span>
          </Link>
        </Menu.Item>
      )}
      <Menu.Item key="3">
        <Icon type="logout" />
        <span onClick={handleLogout}>Logout</span>
      </Menu.Item>
    </Menu>
  )
}
const mapStateToProps = (state, props) => ({
  role:
    state.getIn(['authentication', 'auth', 'role']) || null,
  pageName: state.getIn(['page', 'query', 'pageName']),
  isIdentify: state.getIn([
    'authentication',
    'auth',
    'isIdentify',
  ]),
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)
