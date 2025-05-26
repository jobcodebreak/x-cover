import React, { useState } from "react";
import styled from "styled-components";

const TabMenu = ({ tabs, underlineWidth, fontSize, fontWeight }) => {
  const [activeTabId, setActiveTabId] = useState(tabs?.[0]?.id || 1);
  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <>
      <TabBox>
        <TabitemWrap className="TabMenu">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              tab={tab}
              isActive={tab.id === activeTabId}
              onClick={setActiveTabId}
              underlineWidth={underlineWidth}
              fontSize={fontSize}
              fontWeight={fontWeight}
            />
          ))}
        </TabitemWrap>
      </TabBox>
      <ContentBox>{activeTab?.content}</ContentBox>
    </>
  );
};

// 내부 전용 Tab 컴포넌트
const Tab = ({
  tab,
  isActive,
  onClick,
  underlineWidth,
  fontSize,
  fontWeight,
}) => (
  <Tabitem className={isActive ? "on" : ""} $underlineWidth={underlineWidth}>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick(tab.id);
      }}
    >
      <TabTit $fontSize={fontSize} $fontWeight={fontWeight}>
        {tab.tabName}
      </TabTit>
    </a>
  </Tabitem>
);

export default TabMenu;

const TabBox = styled.div`
  border: 1px solid #eee;
  position: sticky;
  /* top:55px; */
  z-index: 99;
`;
const TabitemWrap = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Tabitem = styled.li`
  flex: 1;
  background: none;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  text-align: center;
  border-width: 10px;
  color: black;
  transition: border-color 0.2s ease;
  /* margin-top: 5px; */
  &.on {
    position: relative;
    a {
      span {
        color: black;
      }
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: ${({ $underlineWidth }) => $underlineWidth || "70%"};
      height: 3px;
      background-color: #2ab9fc;
    }
  }
  &:hover {
    background-color: #f7f7f7;
  }
  a {
    width: 100%;
    display: block;
    padding: 16px;
  }
`;
const ContentBox = styled.div``;

const TabTit = styled.span`
  color: gray;
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "bold"};
`;
