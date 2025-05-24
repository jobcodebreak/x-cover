import styled from "styled-components";
import ProfileTabs from "./ProfileTabs";
import React, { useState } from "react";
import PostsSection from "./PostsSection";
import RepliesSection from "./RepliesSection";
import HighlightsSection from "./HighlightsSection";
import ArticlesSection from "./ArticlesSection";
import MediaSection from "./MediaSection";
import LikesSection from "./LikesSection";

const TabsSection = () => {
  //==============================프로필 탭 관련
  const [activeTab, setActiveTab] = useState("Posts");
  return (
    <Container>
      {/* 탭 UI를 표시하고 조작할 수 있도록 props를 넘겨주는 구조 */}
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* ===== 탭 메뉴 ===== */}
      {activeTab === "Posts" && (
        <>
          <PostsSection />
        </>
      )}
      {activeTab === "Replies" && (
        <>
          <RepliesSection />
        </>
      )}
      {activeTab === "Highlights" && (
        <>
          <HighlightsSection />
        </>
      )}
      {activeTab === "Articles" && (
        <>
          <ArticlesSection />
        </>
      )}
      {activeTab === "Media" && (
        <>
          <MediaSection />
        </>
      )}
      {activeTab === "Likes" && (
        <>
          <LikesSection />
        </>
      )}
    </Container>
  );
};
export default TabsSection;

//==============================styled-components

const Container = styled.div`
  font-family: system-ui, sans-serif;
  min-width: 600px;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
`;
