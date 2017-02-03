import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ClothesStore from "./routes/ClothesStore.js";
import Service from "./routes/Service.js";

import CustomerShow from "./routes/CustomerShow.js";

import AboutUs from "./routes/AboutUs.js";

import Login from "./routes/Login.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/clothes-store" component={ClothesStore} />
      <Route path="/service" component={Service} />
      <Route path="/customer-show" component={CustomerShow} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
