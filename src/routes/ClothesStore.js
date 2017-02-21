import React from 'react';
import { connect } from 'dva';
import IndexPage from './IndexPage.js';

function ClothesStore(props) {
  return (
    <IndexPage location={ props.location }>
      <div>
        Route Component: ClothesStore
      </div>
    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ClothesStore);
