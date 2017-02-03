import React from 'react';
import { connect } from 'dva';
import styles from './ClothesStore.css';
import IndexPage from './IndexPage.js';

function ClothesStore(props) {
  return (
    <IndexPage location={ props.location }>
      <div className={styles.normal}>
        Route Component: ClothesStore
      </div>
    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ClothesStore);
