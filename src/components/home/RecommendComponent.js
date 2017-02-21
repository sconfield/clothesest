import React from 'react';
import { Row, Col, Carousel, Card } from 'antd';
import SubHeaderComponent from './SubHeaderComponent.js';

function RecommendComponent(props) {
  const createImg = (imgUrl, idx)=>(
    <Card bodyStyle={{ padding: 3}} key={idx}>
      <img src={imgUrl} />
    </Card>
  );

  return (
    <div>
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
