import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Link } from 'dva/router';

function IndexPage(props) {
  return (
    <div className={styles.normal}>
      <h1>{ props.location.pathname }</h1>
      <li>
        <Link to="/" activeClassName="active">IndexPage</Link>
        <ul>
          <li>
            <Link to="/clothes-store" activeClassName="active">clothes store</Link>
          </li>
          <li>
            <Link to="/service" activeClassName="active">service</Link>
          </li>
          <li>
            <Link to="/customer-show" activeClassName="active">customer show</Link>
          </li>
          <li>
            <Link to="/about-us" activeClassName="active">about us</Link>
          </li>
          <li>
            <Link to="/login" activeClassName="active">login</Link>
          </li>
        </ul>
      </li>
      { props.children }
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
