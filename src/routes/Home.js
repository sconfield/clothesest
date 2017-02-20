import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import IndexPage from './IndexPage.js';

import GreetComponent from '../components/home/GreetComponent.js';
import NewComponent from '../components/home/NewComponent.js';
import RecommendComponent from '../components/home/RecommendComponent.js';
import ServerComponent from '../components/home/ServerComponent.js';

function Home(props) {

  // greet clothes
  const greetImg = "http://7xlhnh.com1.z0.glb.clouddn.com/GDHL005_%E5%8F%A4%E5%85%B8%E5%A9%9A%E7%A4%BC%E6%9C%8D-%E7%A7%80%E7%A6%BE%E6%9C%8D_M1.png";

  // new clothes
  const newImgs = [
    "http://7xioox.com1.z0.glb.clouddn.com/TB13f48FVXXXXbGXVXXXXXXXXXX_!!0-item_pic.jpg",
    "http://7xlj3r.com1.z0.glb.clouddn.com/XQXF007_%E6%88%8F%E6%9B%B2%E6%88%8F%E5%89%A7-%E7%A9%86%E6%A1%82%E8%8B%B1%E5%85%A8%E5%A5%97_L1.jpg",
    "http://7xioox.com1.z0.glb.clouddn.com/TB2Er.1dVXXXXcmXXXXXXXXXXXX-741644237.jpg",
    "http://7xlk34.com1.z0.glb.clouddn.com/XYYXL006_%E5%96%9C%E7%BE%8A%E7%BE%8A%E7%B3%BB%E5%88%97-%E7%BA%A2%E5%A4%AA%E7%8B%BC_L1.jpg",
    "http://7xioox.com1.z0.glb.clouddn.com/QQ%E6%88%AA%E5%9B%BE20151002173520.jpg",
    "http://7xljuo.com1.z0.glb.clouddn.com/QCFZ012_%E6%B8%85%E6%9C%9D%E6%9C%8D%E8%A3%85-%E7%BB%BF%E8%89%B2%E8%BF%9E%E4%BD%93%E6%A0%BC%E6%A0%BC_L1.jpg",
    "http://7xljvn.com1.z0.glb.clouddn.com/XDWD030_%E7%8E%B0%E4%BB%A3%E8%88%9E%E8%B9%88-%E5%95%A6%E5%95%A6%E6%93%8D%E8%A3%99%E6%AC%BE_S1_M2_L3_XL3.jpg",
    "http://7xlj3k.com1.z0.glb.clouddn.com/HCFZ029_%E6%B1%89%E6%9C%9D%E6%9C%8D%E8%A3%85-%E9%BB%91%E8%89%B2%E7%9B%B4%E8%A3%BE%E5%88%86%E4%BD%93_L1.jpg"
  ];

  // recommend clothes
  const recommendImgs = [
    "http://cqwanyue.com/img/slider1.jpg",
    "http://cqwanyue.com/img/slider2.jpg",
    "http://cqwanyue.com/img/slider3.jpg"
  ];

  // server image
  const serverImg = "http://7xlk57.com1.z0.glb.clouddn.com/MGFZ003_%E6%B0%91%E5%9B%BD%E6%9C%8D%E8%A3%85-%E6%B7%B1%E7%81%B0%E8%89%B2%E6%A3%89%E9%BA%BB%E9%95%BF%E8%A1%AB_L20.jpg";

  return (
    <IndexPage location={ props.location }>
      <GreetComponent greetImg={greetImg} />
      <NewComponent newImgs={newImgs} />
      <RecommendComponent recommendImgs={recommendImgs} />
      <ServerComponent serverImg={serverImg} />

      <div className={styles.magazine}>

      </div>

    </IndexPage>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
