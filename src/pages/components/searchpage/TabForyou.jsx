import React, { useState } from 'react';
import { Cont, ImgBox, ImgTxt, ImgBtn, Contit } from './styles';
import TrendItem from './TrendItem';
import WhoToFollow from './WhoToFollow';
import BannerModal from './BannerModal';
import Items from '../mainpage/Items';
import moreIcon from '../../../assets/icons/more.svg';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const TabForyou = () => {
  const trendItems = [
    { subtit: 'Trending in Joseon', tit: '세책점', post: '68.1k posts' },
    { subtit: 'Trending in Joseon', tit: '한글사랑', post: '95.5k posts' },
    { subtit: 'Culture Real-time trends', tit: '경복궁', post: '42.5k posts' },
    { subtit: 'Music Real-time trends', tit: '선농제(先農祭)', post: '12.8k posts' },
    { subtit: 'Trending in Joseon', tit: '거중기', post: '1,514 posts' },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [isImgBoxVisible, setImgBoxVisible] = useState(true); // ImgBox의 표시 여부를 관리
  const [messageVisible, setMessageVisible] = useState(false); // 문구가 나타날지 여부를 관리

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleModalClick = () => {
    setImgBoxVisible(false);  // ImgBox를 숨기고
    setMessageVisible(true);  // 문구 표시
  };


  return (
    <Cont>
      {/* ImgBox가 보일 때만 렌더링 */}
      {isImgBoxVisible && (
        <ImgBox>
          <img
            src="https://cdn.pixabay.com/photo/2022/10/01/01/53/gyeongbokgung-palace-7490465_640.jpg"
            alt="한옥 이미지"
          />
          <ImgTxt>
            <p>#경복궁_Gyeongbokgung Palace</p>
            <p>화려한가? 견고한가? 왕실의 권위를 높이기 위한 상징적인 공간, 경복궁이올시다.</p>
          </ImgTxt>
          <ImgBtn onClick={handleOpen}>
            <img src={moreIcon} alt="더보기 아이콘" />
          </ImgBtn>
          {/* 모달 표시 */}
          {isModalOpen && (
            <BannerModal handleClose={handleClose} handleModalClick={handleModalClick}>
              <ModalList>
                <ModalItem to="#">Don’t want to see this ad</ModalItem>
              </ModalList>
            </BannerModal>
          )}
        </ImgBox>
      )}

      {/* 문구를 표시할 div */}
      {messageVisible && !isImgBoxVisible && (
        <MessageBox>
          <p>Thanks. Refresh this page to update these trends.</p>
        </MessageBox>
      )}

      <ul>
        {trendItems.map((item, index) => (
          <TrendItem key={index} {...item} />
        ))}
      </ul>
      <WhoToFollow />
      <Contit>recommended post</Contit>
      <Items />
    </Cont>
  );
};

export default TabForyou;


//모달 레이아웃 
const ModalList = styled.li`
  width:100%;
  list-style:none;
`;
const ModalItem = styled(Link)`
  width:100%;
  display:block;
`;
const MessageBox = styled.div`
  width:100%;
  padding:10px;
  border-bottom: 1px solid rgb(239, 243, 244);
  p {
  padding:15px 20px;
  background-color: rgba(247, 249, 249, 1.00);
  border-radius: 12px;
  }
`;

