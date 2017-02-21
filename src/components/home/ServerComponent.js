import React from 'react';
import { Card, Row, Col, Tag, Alert } from 'antd';
import SubHeaderComponent from './SubHeaderComponent.js';

function ServerComponent(props) {
  return (
    <div>
      <SubHeaderComponent message="为您服务" />
      <Row>
        <Col offset={2} span={6}>
          <Card title="十年行业经验">
            <img src={props.serverImg} />
          </Card>
        </Col>
        <Col offset={1} span={13}>
          <Card>
            <div>
              <Tag color="pink">专</Tag>
              <Tag color="red">注</Tag>
              <Tag color="orange">服</Tag>
              <Tag color="yellow">装</Tag>
              <Tag color="green">租</Tag>
              <Tag color="cyan">赁</Tag>
              <Tag color="blue">行</Tag>
              <Tag color="purple">业</Tag>
            </div>
            <br />
            <div>
              <Alert message="值得信赖的合作伙伴" type="success" showIcon />
              <Alert message="丰富的服装资源" type="info" showIcon />
              <Alert message="星级服务" type="warning" showIcon />
              <Alert
                message="success tips"
                description="Detailed description and advices about successful copywriting."
                type="success"
                showIcon
              />
              <Alert
                message="Informational Notes"
                description="Additional description and informations about copywriting."
                type="info"
                showIcon
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ServerComponent;
