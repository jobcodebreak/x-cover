import React from 'react';
import { Cont, ImgBox, ImgTxt, ImgBtn } from './styles';
import TrendItem from './TrendItem';
import WhoToFollow from './WhoToFollow';
import moreIcon from '../../../assets/icons/more.svg';

const TabForyou = () => {
  const trendItems = [
    { subtit: 'Trending in Joseon', tit: '거중기', post: '1,514 posts' },
    { subtit: 'Trending in Joseon', tit: '한글사랑', post: '95.5k posts' },
    { subtit: 'Trending in Joseon', tit: '경복궁', post: '42.5k posts' },
  ];

  return (
    <Cont>
      <ImgBox>
        <img
          src="https://cdn.pixabay.com/photo/2022/10/01/01/53/gyeongbokgung-palace-7490465_640.jpg"
          alt="한옥 이미지"
        />
        <ImgTxt>
          <p>#경복궁_Gyeongbokgung Palace</p>
          <p>화려한가? 견고한가? 왕실의 권위를 높이기 위한 상징적인 공간, 경복궁이올시다.</p>
        </ImgTxt>
        <ImgBtn>
          <img src={moreIcon} alt="더보기 아이콘" />  
        </ImgBtn>
      </ImgBox>

      <ul>
        {trendItems.map((item, index) => (
          <TrendItem key={index} {...item} />
        ))}
      </ul>

      <WhoToFollow />
    </Cont>
  );
};

export default TabForyou;
