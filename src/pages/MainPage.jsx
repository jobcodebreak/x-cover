import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";
import leftArrow from "../assets/icons/arrow-left.svg";
import { useState } from "react";
import gifIcon from "../assets/icons/gif.svg";
import photoIcon from "../assets/icons/photo.svg";
import locationIcon from "../assets/icons/location.svg";
import smileIcon from "../assets/icons/smile.svg";
import fireIcon from "../assets/icons/fire.svg";

const Container = styled.div`
  background: white;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: system-ui, sans-serif;
  width: 600px;
  height: 100vh; /* 화면 전체 높이 */
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;

const TabWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;
const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
`;
const ShowPostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  span {
    color: #2ab9fc;
  }
  padding: 14px;
`;
const Tab = styled.button`
  flex: 1;
  padding: 16px;
  background: none;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border-width: 10px;
  border-bottom: 2px solid
    ${({ active }) => (active ? "#2ab9fc" : "transparent")};
  color: ${({ active }) => (active ? "black" : "gray")};
  transition: border-color 0.2s ease;

  &:hover {
    background-color: #f7f7f7;
  }
`;
const TabText = styled.span`
  position: relative;
  color: ${({ active }) => (active ? "black" : "gray")};
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    height: 4px;
    width: 100%;
    background-color: ${({ active }) => (active ? "#2ab9fc" : "transparent")};
    border-radius: 2px;
    transition: background-color 0.2s ease;
  }
`;
const PostWrite = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const IconsWrite = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;
const WriteInput = styled.input.attrs({
  placeholder: "What's happening?",
})`
  padding: 12px;
  font-size: 20px;
  border: none;
  outline: none;
`;

const PostBtn = styled.button`
  border-radius: 20px;
  background-color: #a7a7a7;
  color: white;
  width: 60px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  margin: 10px;
`;

const IconsImg = styled.img`
  width: 20px;
  height: 20px;
`;
const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 60px;
`;
function MainPage() {
  const [activeTab, setActiveTab] = useState("forYou");
  return (
    <Container>
      <MainContainer>
        <TabWrapper>
          <Tab onClick={() => setActiveTab("forYou")}>
            <TabText active={activeTab === "forYou"}>For you</TabText>
          </Tab>
          <Tab onClick={() => setActiveTab("following")}>
            <TabText active={activeTab === "following"}>Following</TabText>
          </Tab>
        </TabWrapper>
        <PostWrapper>
          <PostWrite>
            <UserImg src="https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800" />
            <WriteInput />
          </PostWrite>
          <IconsWrite>
            <IconsWrapper>
              <IconsImg src={photoIcon} />
              <IconsImg src={gifIcon} />
              <IconsImg src={fireIcon} />
              <IconsImg src={smileIcon} />
              <IconsImg src={locationIcon} />
            </IconsWrapper>
            <PostBtn>post</PostBtn>
          </IconsWrite>
        </PostWrapper>
        <ShowPostWrapper>
          <span>Show 140 posts</span>
        </ShowPostWrapper>
      </MainContainer>
      <RightSidebar />
    </Container>
  );
}

export default MainPage;
