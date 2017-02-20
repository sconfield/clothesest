import React from 'react';
import styles from './RecommendComponent.css';
import { Row, Col, Carousel, Card } from 'antd';
import SubHeaderComponent from './SubHeaderComponent.js';

function RecommendComponent(props) {
  const createImg = (imgUrl, idx)=>(
    <Card bodyStyle={{ padding: 3}}>
      <img src={imgUrl} key={idx} />
    </Card>
  );

  return (
    <div className={styles.normal}>
      <SubHeaderComponent message="推荐给您" />
      <Row>
        <Col offset={6} span={12}>
          <Carousel autoplay>
            {props.recommendImgs.map(createImg)}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default RecommendComponent;
