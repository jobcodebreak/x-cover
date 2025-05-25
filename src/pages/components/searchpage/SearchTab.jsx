import React, { useState } from 'react';
import { TabBox, TabitemWrap, ContentBox } from './styles';
import Tab from './Tab';
import TabForyou from './TabForyou';
import TabTrending from './TabTrending';
import TabNews from './TabNews';


const SearchTab = () => {
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
    3: <TabNews />,
    4: <TabNews />,
    5: <TabNews />,
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

export default SearchTab;