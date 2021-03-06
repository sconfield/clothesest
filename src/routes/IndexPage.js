import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import { Row, Col, BackTop } from 'antd';

import MenuComponent from '../components/MenuComponent.js';
import LogoComponent from '../components/LogoComponent.js';
import AdditionalComponent from '../components/AdditionalComponent.js';

function IndexPage(props) {
  return (
    <div className={styles.normal}>
      <Row className={styles.navigating}>
        <Col span={4}>
          <LogoComponent />
        </Col>
        <Col span={16}>
          <MenuComponent { ...props } />
        </Col>
        <Col span={4}>
          <AdditionalComponent />
        </Col>
      </Row>

      { props.children }

      <div className={styles.footer}>
        <h1>footer</h1>
      </div>

      <BackTop>
        <div className={styles.backTopInner}>UP</div>
      </BackTop>

    </div>
  );
}

// this is a container component.
function mapStateToProps(state) {
  return {
    selected: state.indexPage.selected
  }
}

export default connect(mapStateToProps)(IndexPage);
