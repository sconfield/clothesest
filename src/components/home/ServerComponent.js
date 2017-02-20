import React from 'react';
import styles from './ServerComponent.css';
import { Card, Row, Col, Tag, Alert } from 'antd';
import SubHeaderComponent from './SubHeaderComponent.js';

function ServerComponent(props) {
  return (
    <div className={styles.normal}>
      <SubHeaderComponent message="为您服务" />
      <Row>
        <Col offset={2} span={6}>
          <Card title="专注服装租赁行业">
            <img src={props.serverImg} />
          </Card>
        </Col>
        <Col offset={1} span={13}>
          <Card>
            <div>
              <Tag color="pink">pink</Tag>
              <Tag color="red">red</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="yellow">yellow</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="purple">purple</Tag>
            </div>
            <br />
            <div>
              <Alert message="Success Tips" type="success" showIcon />
              <Alert message="Informational Notes" type="info" showIcon />
              <Alert message="Warning" type="warning" showIcon />
              <Alert message="Error" type="error" showIcon />
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
