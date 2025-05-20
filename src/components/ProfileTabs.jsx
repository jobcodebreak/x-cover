// ProfileTabs.jsx
import React, { useState } from "react";
import styled from "styled-components";

const tabs = ["Posts", "Replies", "Highlights", "Articles", "Media", "Likes"];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabItem
          key={tab}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </TabItem>
      ))}
    </TabsContainer>
  );
};

export default ProfileTabs;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e1e8ed;
  margin-top: 16px;
`;

const TabItem = styled.div`
  padding: 12px 0;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "black" : "#657786")};
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    display: ${(props) => (props.active ? "block" : "none")};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #1da1f2;
  }
`;
