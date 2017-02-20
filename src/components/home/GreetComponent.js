import React from 'react';
import styles from './GreetComponent.css';
import { Row, Col, Card } from 'antd';
import SubHeaderComponent from './SubHeaderComponent.js';

function GreetComponent(props) {
  return (
    <div className={styles.normal}>
      <SubHeaderComponent message="新用户注册赠送 100 元电子卷" />
      <Row>
        <Col offset={4} span={16}>
          <Card bodyStyle={{ padding: 6 }}>
            <img src={props.greetImg} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GreetComponent;
