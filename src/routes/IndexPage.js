import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import MenuComponent from '../components/MenuComponent.js';

function IndexPage(props) {
  return (
    <div className={styles.normal}>

      { props.location.pathname }

      <MenuComponent { ...props } />

      { props.children }

    </div>
  );
}

// this is a container component.
function mapStateToProps(state) {
  return {
    selected: state.indexPage.selected
  }
}

export default connect(mapStateToProps)(IndexPage);
