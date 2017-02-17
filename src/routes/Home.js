import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import IndexPage from './IndexPage.js';

import { Card, Row, Col, Carousel, Tag, Alert } from 'antd';

function Home(props) {

  // big card
  const img1 = "http://7xlhnh.com1.z0.glb.clouddn.com/GDHL005_%E5%8F%A4%E5%85%B8%E5%A9%9A%E7%A4%BC%E6%9C%8D-%E7%A7%80%E7%A6%BE%E6%9C%8D_M1.png";

  // samll card
  const img2 = "http://7xioox.com1.z0.glb.clouddn.com/TB13f48FVXXXXbGXVXXXXXXXXXX_!!0-item_pic.jpg";
  const img3 = "http://7xlj3r.com1.z0.glb.clouddn.com/XQXF007_%E6%88%8F%E6%9B%B2%E6%88%8F%E5%89%A7-%E7%A9%86%E6%A1%82%E8%8B%B1%E5%85%A8%E5%A5%97_L1.jpg";
  const img4 = "http://7xioox.com1.z0.glb.clouddn.com/TB2Er.1dVXXXXcmXXXXXXXXXXXX-741644237.jpg";
  const img5 = "http://7xlk34.com1.z0.glb.clouddn.com/XYYXL006_%E5%96%9C%E7%BE%8A%E7%BE%8A%E7%B3%BB%E5%88%97-%E7%BA%A2%E5%A4%AA%E7%8B%BC_L1.jpg";
  const img6 = "http://7xioox.com1.z0.glb.clouddn.com/QQ%E6%88%AA%E5%9B%BE20151002173520.jpg";
  const img7 = "http://7xljuo.com1.z0.glb.clouddn.com/QCFZ012_%E6%B8%85%E6%9C%9D%E6%9C%8D%E8%A3%85-%E7%BB%BF%E8%89%B2%E8%BF%9E%E4%BD%93%E6%A0%BC%E6%A0%BC_L1.jpg";
  const img8 = "http://7xlk57.com1.z0.glb.clouddn.com/MGFZ003_%E6%B0%91%E5%9B%BD%E6%9C%8D%E8%A3%85-%E6%B7%B1%E7%81%B0%E8%89%B2%E6%A3%89%E9%BA%BB%E9%95%BF%E8%A1%AB_L20.jpg";
  const img9 = "http://7xlj3k.com1.z0.glb.clouddn.com/HCFZ023_%E6%B1%89%E6%9C%9D%E6%9C%8D%E8%A3%85-%E5%88%86%E4%BD%93%E6%8B%96%E5%B0%BE%E5%9E%8B-%E7%B2%89%E7%BA%A2%E8%89%B2_M1.jpg";

  // recommend carousel
  const img11 = "http://cqwanyue.com/img/slider1.jpg";
  const img12 = "http://cqwanyue.com/img/slider2.jpg";
  const img13 = "http://cqwanyue.com/img/slider3.jpg";

  return (
    <IndexPage location={ props.location }>
      <Row>
        <Col offset={4} span={16}>
          <Card bodyStyle={{ padding: 6 }}>
            <img src={img1} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.subHeader}>
            <h1>最新服装</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col offset={4} span={4}>
          <Card bodyStyle={{ padding: 3 }} title="维多利亚的秘密" className={styles.smallCard}>
            <img src={img2} />
          </Card>
        </Col>
        <Col span={4}>
          <Card bodyStyle={{ padding: 3 }} title="维多利亚的秘密" className={styles.smallCard}>
            <img src={img3} />
          </Card>
        </Col>
        <Col span={4}>
          <Card bodyStyle={{ padding: 3 }} title="维多利亚的秘密" className={styles.smallCard}>
            <img src={img4} />
          </Card>
        </Col>
        <Col span={4}>
          <Card bodyStyle={{ padding: 3 }} title="维多利亚的秘密" className={styles.smallCard}>
            <img src={img5} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col offset={4} span={4}>
          <Card bodyStyle={{ padding: 3 }} title="维多利亚的秘密" className={styles.smallCard}>
            <img src={img6} />
          </Card>
        </Col>
        <Col span={4}>
          <Card bodyStyle={{ padding: 3 }} title="维多利亚的秘密" className={styles.smallCard}>
            <img src={img7} />
          </Card>
        </Col>
        <Col span={4}>
          <Card bodyStyle={{ padding: 3 }} title="维多利亚的秘密" className={styles.smallCard}>
            <img src={img8} />
          </Card>
        </Col>
        <Col span={4}>
          <Card bodyStyle={{ padding: 3 }} title="维多利亚的秘密" className={styles.smallCard}>
            <img src={img9} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.subHeader}>
            <h1>推荐给您</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col offset={6} span={12}>
          <Carousel autoplay>
            <img src={img11} />
            <img src={img12} />
            <img src={img13} />
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.subHeader}>
            <h1>为您服务</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col offset={2} span={6}>
          <Card title="专注服装租赁行业">
            <img src={img8} />
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
    </IndexPage>
  );
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Home);
