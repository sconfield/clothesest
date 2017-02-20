import React from 'react';
import styles from './NewComponent.css';
import { Card, Row, Col } from 'antd';
import SubHeaderComponent from './SubHeaderComponent.js';

function NewComponent(props) {
  const column_first = props.newImgs.slice(0, 4);
  const column_second = props.newImgs.slice(4, 8);
  const createCard = (imgUrl, idx)=>{
    let offsetVal = 0;
    if (idx == 0) {
      offsetVal = 4
    }
    return (
      <Col offset={offsetVal} span={4} key={idx}>
        <Card bodyStyle={{ padding: 3 }} title={"维多利亚的秘密_"+idx}>
          <img src={imgUrl} />
        </Card>
      </Col>
    );
  };

  return (
    <div className={styles.normal}>
      <SubHeaderComponent message="最新服装" />
      <Row>
        {column_first.map(createCard)}
      </Row>
      <Row>
        {column_second.map(createCard)}
      </Row>
    </div>
  );
}

export default NewComponent;
