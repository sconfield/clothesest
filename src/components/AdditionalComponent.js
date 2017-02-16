import React from 'react';
import styles from './AdditionalComponent.css';
import { Link } from 'dva/router';

import { Icon, Button, Popover } from 'antd';

function LoginAndMapComponent() {
  const wechat = (
    <div>
      i love you!
    </div>
  );

  return (
    <div className={styles.normal}>
      <Button type="primary" icon="environment" size="large">
        地图导航
      </Button>
      &nbsp;
      <Button type="dashed" icon="user">
        <Link to="/login">登录</Link>
      </Button>
      &nbsp;
      <Popover placement="bottomRight" title="微信二维码" content={wechat}>
        <Button>微信</Button>
      </Popover>
    </div>
  );
}

export default LoginAndMapComponent;
