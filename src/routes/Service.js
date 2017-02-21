import React from 'react';
import { connect } from 'dva';
import IndexPage from './IndexPage.js';

function Service(props) {
  return (
    <IndexPage location={ props.location }>
      <div>
        Route Component: Service
      </div>
    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Service);
