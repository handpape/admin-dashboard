import React from 'react';
import { Form, Input, Button } from 'antd';

const Settings = () => (
  <Form layout="vertical" style={{ padding: '20px' }}>
    <Form.Item label="Username" name="username">
      <Input placeholder="Enter your username" />
    </Form.Item>
    <Form.Item label="Email" name="email">
      <Input type="email" placeholder="Enter your email" />
    </Form.Item>
    <Button type="primary" htmlType="submit">
      Save Changes
    </Button>
  </Form>
);

export default Settings;