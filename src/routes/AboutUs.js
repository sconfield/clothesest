import React from 'react';
import { connect } from 'dva';
import styles from './AboutUs.css';
import IndexPage from './IndexPage.js';

function AboutUs(props) {
  return (
    <IndexPage location={ props.location }>
      <div className={styles.normal}>
        Route Component: AboutUs
      </div>
    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(AboutUs);
