import { Menu, Icon } from 'antd'
import './styles.less'
const { SubMenu } = Menu

const Sidebar = () => {
  return (
    <Menu
      className="sidebar"
      theme="dark"
      defaultSelectedKeys={['1']}
      mode="inline">
      <Menu.Item key="1">
        <Icon type="pie-chart" />
        <span>หน้าหลัก</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        <span>ข้อมูลส่วนตัว</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="logout" />
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  )
}

export default Sidebar
