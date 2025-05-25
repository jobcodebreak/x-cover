import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";
import { useState } from "react";
import Items from "./components/mainpage/Items";
import PostComponents from "./components/mainpage/PostComponents";
import TabMenu from "../components/TabMenu";
import TabNews from "./components/searchpage/TabNews";

const Container = styled.div`
  background: white;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  gap: 20px;
  /* overflow-y: auto; */
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: system-ui, sans-serif;
  width: 600px;
  /* height: 100vh; */
  /* overflow-y: auto; */
  /* border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1); */
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;
const ShowPostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
  span {
    color: #2ab9fc;
  }
  padding: 14px;
`;
// const TabWrapper = styled.div`
//   display: flex;
//   border-bottom: 1px solid #ddd;
//   border-right: 1px solid #ddd;
//   border-left: 1px solid #ddd;
//   position: sticky;
//   top: 0;
//   z-index: 10;
//   background-color: rgba(255, 255, 255, 0.8); /* 반투명 배경 */
//   backdrop-filter: blur(10px); /* 흐림 효과 */
// `;
// const Tab = styled.button`
//   flex: 1;
//   padding: 16px;
//   background: none;
//   border: none;
//   font-weight: bold;
//   font-size: 16px;
//   cursor: pointer;
//   border-width: 10px;
//   &:hover {
//     background-color: #f7f7f7;
//   }
// `;
// const TabText = styled.span`
//   position: relative;
//   color: ${({ active }) => (active ? "black" : "gray")};
//   &::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: -18px;
//     height: 4px;
//     width: 100%;
//     background-color: ${({ active }) => (active ? "#2ab9fc" : "transparent")};
//     border-radius: 2px;
//     transition: background-color 0.2s ease;
//   }
// `;
function MainPage() {
  // const [activeTab, setActiveTab] = useState("forYou");
  const tabs = [
    {
      id: 1,
      tabName: "For you",
      content: (
        <>
          <PostComponents />
          <ShowPostWrapper>
            <span>Show 140 posts</span>
          </ShowPostWrapper>
          <Items />
        </>
      ),
    },
    {
      id: 2,
      tabName: "Following",
      content: (
        <>
          <PostComponents />
          <ShowPostWrapper>
            <span>Show 40 posts</span>
          </ShowPostWrapper>
        </>
      ),
    },
  ];
  return (
    <Container>
      <MainContainer>
        <TabMenu
          tabs={tabs}
          underlineWidth="25%"
          fontSize="16px"
          fontWeight="bold"
        />
        {/* <TabWrapper>
          <Tab onClick={() => setActiveTab("forYou")}>
            <TabText active={activeTab === "forYou"}>For you</TabText>
          </Tab>
          <Tab onClick={() => setActiveTab("following")}>
            <TabText active={activeTab === "following"}>Following</TabText>
          </Tab>
        </TabWrapper> */}
        {/* <PostComponents /> */}
        {/* {activeTab === "forYou" && (
          <>
            <ShowPostWrapper>
              <span>Show 140 posts</span>
            </ShowPostWrapper>
            <Items />
          </>
        )} */}
      </MainContainer>
      <RightSidebar />
    </Container>
  );
}

export default MainPage;
