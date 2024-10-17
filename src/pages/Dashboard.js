import React from 'react';
import { Card, Col, Row } from 'antd';

const Dashboard = () => (
  <div style={{ padding: '20px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Users" bordered={false}>
          100 Active Users
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Revenue" bordered={false}>
          $10,000
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Performance" bordered={false}>
          95%
        </Card>
      </Col>
    </Row>
  </div>
);

export default Dashboard;