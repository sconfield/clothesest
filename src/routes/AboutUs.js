import React from 'react';
import { connect } from 'dva';
import IndexPage from './IndexPage.js';

function AboutUs(props) {
  return (
    <IndexPage location={ props.location }>
      <div>
        Route Component: AboutUs
      </div>
    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(AboutUs);
