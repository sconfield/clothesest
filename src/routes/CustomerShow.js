import React from 'react';
import { connect } from 'dva';
import styles from './CustomerShow.css';
import IndexPage from './IndexPage.js';

function CustomerShow(props) {
  return (
    <IndexPage location={ props.location }>
      <div className={styles.normal}>
        Route Component: CustomerShow
      </div>
    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(CustomerShow);
