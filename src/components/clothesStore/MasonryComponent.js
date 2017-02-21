import React from 'react';
import styles from './MasonryComponent.css';
import Masonry from 'react-masonry-component';
import { Card } from 'antd';

function MasonryComponent(props) {
  const masonryWidth = window.document.body.clientWidth * 19 / 24 / 4;
  const masonryOptions = {
    transitionDuration: 0
  };
  const createItem = (item, idx)=>{
    return (
      <Card key={idx} style={{width: masonryWidth}}
        bodyStyle={{ padding: 8 }} title={item.type}>
        <img src={item.url} />
      </Card>
    );
  };

  return (
    <div className={styles.normal}>
      <Masonry options={masonryOptions}>
        {props.clothes.map(createItem)}
      </Masonry>
    </div>
  );
}

export default MasonryComponent;
