import React from 'react';
import { useState } from 'react';
import styled from "styled-components";


//tab list
const Tab = ({ tab, isActive, onClick }) => {
    return (
        <Tabitem className={isActive ? 'on' : ''}>
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    onClick(tab.id);
                }}
            >
                <TabText>{tab.tabName}</TabText>
            </a>
        </Tabitem>
    );
};
//tab content list
const TabCon = () => {
  return (
      <Cont>
        <ImgBox>
            <img src="https://cdn.pixabay.com/photo/2022/10/01/01/53/gyeongbokgung-palace-7490465_640.jpg " alt="한옥 이미지" />
            {/* <img src="https://cdn.pixabay.com/photo/2017/10/11/02/13/hanok-2839691_1280.jpg" alt="한옥 이미지" /> */}
            <ImgTxt>
              <p>#경복궁_Gyeongbokgung Palace</p>
              <p>화려한가? 견고한가? 왕실의 권위를 높이기 위한 상징적인 공간, 경복궁이올시다.</p>
            </ImgTxt>
        </ImgBox>
        
      </Cont>
    );
}

//메인 
const TabMenu = () => {
    const [activeTabId, setActiveTabId] = useState(1);

    const tabs = [
        { id: 1, tabName: 'For You' },
        { id: 2, tabName: 'Trending' },
        { id: 3, tabName: 'News' },
        { id: 4, tabName: 'Sports' },
        { id: 5, tabName: 'Entertainment' },
    ];

    const tabContents = {
        1: <TabCon/>,
        2: <p>실시간 인기 콘텐츠입니다.</p>,
        3: <p>최신 뉴스입니다.</p>,
        4: <p>스포츠 관련 소식입니다.</p>,
        5: <p>연예계 뉴스를 볼 수 있습니다.</p>,
    };

    const handleTabClick = (id) => {
        setActiveTabId(id);
    };

    return (
        <>
            <TabBox>
                <TabitemWrap className="TabMenu">
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            tab={tab}
                            isActive={tab.id === activeTabId}
                            onClick={handleTabClick}
                        />
                    ))}
                </TabitemWrap>
            </TabBox>

            <ContentBox>
                {tabContents[activeTabId]}
            </ContentBox>
        </>
    );
};

export default TabMenu;
// ======================= styled-components =========================

const TabBox = styled.div`
  // outline: 1px solid red;
  border-bottom: 1px solid #eee ;
  position:sticky;
`;
const TabitemWrap = styled.ul`
  display:flex;
  justify-content: space-between;
`;
const Tabitem = styled.li`
  flex: 1;
  background: none;
  border: none;
  font-weight: bold;
  font-size: 16px;
  text-align : center;
  border-width: 10px;
  color: black;
  transition: border-color 0.2s ease;
  margin-top:5px;
  &.on{
    position: relative;
    a {
      span {
        color:black;
      }
    }
    &::after {
      content: "";
      position: absolute;
      left:50%;
      bottom:0;
      transform: translateX(-50%);
      width:70%;
      height:3px;
      background-color:#2ab9fc;
    }
  }
  &:hover {
    background-color: #f7f7f7;
  }
  a{
    width:100%; 
    display:block;
    padding:16px;
  }
`;
const ContentBox = styled.div``;
const TabText = styled.span`
  color: gray;
`;

// TabContent css
const Cont = styled.div`
  width:600px;
`;
const ImgBox = styled.div`
  width:100%;
  position:relative;
  background: black;
  img {
    width:100%;
    display:block;
    background: black;
    opacity: 0.6;
  }
`;

const ImgTxt = styled.div`
  position: absolute;
  bottom:0;
  p{
    color:white;
    padding: 0 10px 10px;
    &:first-child {
      font-size:22px;
      font-weight:bold;
    }
    &:last-child {
      font-size:16px;
      font-weight:400;
      margin-bottom: 20px;
    }
  }
`;
