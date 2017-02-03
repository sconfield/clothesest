import React from 'react';
import { connect } from 'dva';
import styles from './Service.css';
import IndexPage from './IndexPage.js';

function Service(props) {
  return (
    <IndexPage location={ props.location }>
      <div className={styles.normal}>
        Route Component: Service
      </div>
    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Service);
