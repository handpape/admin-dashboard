import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  DatabaseOutlined
} from '@ant-design/icons';

const Sidebar = () => (
  <Menu mode="inline" style={{ width:'200px', height: '100vh' }}>
    <Menu.Item key="1" icon={<DashboardOutlined />}>
      <Link to="/">Dashboard</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      <Link to="/users">Users</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<SettingOutlined />}>
      <Link to="/settings">Settings</Link>
    </Menu.Item>
    <Menu.Item key="4" icon={<DatabaseOutlined />}>
      <Link to="/monitor">모니터링</Link>
    </Menu.Item>
  </Menu>
);

export default Sidebar;