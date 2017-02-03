import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import IndexPage from './IndexPage.js';

function Login(props) {
  return (
    <IndexPage location={ props.location }>
      <div className={styles.normal}>
        Route Component: Login
      </div>
    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Login);
