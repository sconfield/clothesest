import React from 'react';
import { Link } from 'dva/router';
import { Button, Popover } from 'antd';

function LoginAndMapComponent() {
  const wechat = (
    <div>
      <p>i love you!</p>
      <blockquote>you love me!</blockquote>
      <h1>the world is full of love!</h1>
    </div>
  );

  return (
    <div>
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
