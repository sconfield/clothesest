import React from 'react';
import styles from './AdditionalComponent.css';
import { Link } from 'dva/router';
import { Button, Popover, Badge } from 'antd';

function LoginAndMapComponent() {
  const wechat = (
    <div>
      <p>i love you!</p>
      <blockquote>you love me!</blockquote>
      <h1>the world is full of love!</h1>
    </div>
  );

  return (
    <div className={styles.normal}>
      <Button type="primary" icon="environment"
        size="large" className={styles.additionalBtn}>
        地图导航
      </Button>
      &nbsp;
      <Popover placement="bottomRight" title="微信二维码" content={wechat}>
        <Button className={styles.additionalBtn}>微信</Button>
      </Popover>
      &nbsp;
      <Badge count={6}>
        <Button type="dashed" icon="user"
          className={styles.additionalBtn}>
          <Link to="/login">登录</Link>
        </Button>
      </Badge>
    </div>
  );
}

export default LoginAndMapComponent;
