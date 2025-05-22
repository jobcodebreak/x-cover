import React from 'react';
import { Cont, ImgBox, ImgTxt, ImgBtn } from './styles';
import TrendItem from './TrendItem';


const TabForyou = () => {
  const trendItems = [
    { subtit: '1. Trending in Joseon', tit: '거중기', post: '1,514 posts' },
    { subtit: '2. Trending in Joseon', tit: '한글사랑', post: '95.5k posts' },
    { subtit: '3. Trending in Joseon', tit: '경복궁', post: '42.5k posts' },
  ];

  return (
    <Cont>
      <ul>
        {trendItems.map((item, index) => (
          <TrendItem key={index} {...item} />
        ))}
      </ul>
    </Cont>
  );
};

export default TabForyou;
