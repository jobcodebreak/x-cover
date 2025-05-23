import React from 'react';
import { Cont, ImgBox, ImgTxt, ImgBtn } from './styles';
import TrendItem from './TrendItem';


const TabTrending = () => {
  const trendItems = [
    { subtit: 'Trending in Joseon', tit: '훈민정음', post: '1,514 posts' },
    { subtit: 'Trending in Joseon', tit: '한글사랑', post: '95.7k posts' },
    { subtit: 'Trending in Joseon', tit: '집현전 ', post: '42.9k posts' },
    { subtit: 'Trending in Joseon', tit: '용비어천가 ', post: '82.2k posts' },
    { subtit: 'Trending in Joseon', tit: '삼강행실도 ', post: '48.4k posts' },
    { subtit: 'Trending in Joseon', tit: '제4대국왕 ', post: '85.4k posts' },
    { subtit: 'Trending in Joseon', tit: '충녕대군 ', post: '42.5k posts' },
  ];
    const finalItems = trendItems.map((item, index) => ({
    ...item,
    subtit: `${index + 1}. ${item.subtit}`,
  }));

  return (
    <Cont>
      <ul>
        {finalItems.map((item, index) => (
          <TrendItem key={index} {...item} />
        ))}
      </ul>
    </Cont>
  );
};

export default TabTrending;
