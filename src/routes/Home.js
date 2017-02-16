import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import IndexPage from './IndexPage.js';

function Home(props) {
  return (
    <IndexPage location={ props.location }>
      <div className={styles.normal}>
        Route Component: Home
      </div>
    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
