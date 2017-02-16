import React from 'react';
import { Router, Route } from 'dva/router';
import ClothesStore from "./routes/ClothesStore.js";
import Service from "./routes/Service.js";
import CustomerShow from "./routes/CustomerShow.js";
import AboutUs from "./routes/AboutUs.js";
import Login from "./routes/Login.js";
import Home from "./routes/Home.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="/clothes-store" component={ClothesStore} />
      <Route path="/service" component={Service} />
      <Route path="/customer-show" component={CustomerShow} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
