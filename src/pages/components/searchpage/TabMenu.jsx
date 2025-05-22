import React, { useState } from 'react';
import { TabBox, TabitemWrap, ContentBox } from './styles';
import Tab from './Tab';
import TabForyou from './TabForyou';
import TabTrending from './TabTrending';


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
    1: <TabForyou />,
    2: <TabTrending />,
    3: <p>최신 뉴스입니다.</p>,
    4: <p>스포츠 관련 소식입니다.</p>,
    5: <p>연예계 뉴스를 볼 수 있습니다.</p>,
  };

  return (
    <>
      <TabBox>
        <TabitemWrap className="TabMenu">
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              tab={tab}
              isActive={tab.id === activeTabId}
              onClick={setActiveTabId}
            />
          ))}
        </TabitemWrap>
      </TabBox>
      <ContentBox>{tabContents[activeTabId]}</ContentBox>
    </>
  );
};

export default TabMenu;