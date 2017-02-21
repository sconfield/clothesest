import React from 'react';
import { connect } from 'dva';
import IndexPage from './IndexPage.js';

function Login(props) {
  return (
    <IndexPage location={ props.location }>
      <div>
        Route Component: Login
      </div>
    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Login);
