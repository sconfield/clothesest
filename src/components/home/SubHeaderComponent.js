import React from 'react';
import styles from './SubHeaderComponent.css';
import { Row, Col } from 'antd';

function SubHeaderComponent(props) {
  return (
    <div className={styles.normal + ' css903a97e3118212'}>
      <Row>
        <Col>
          <h1>{props.message}</h1>
        </Col>
      </Row>
    </div>
  );
}

export default SubHeaderComponent;
