import React from "react";
import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";
import CenterProfile from "../pages/components/profilepage/CenterProfile";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const CenterArea = styled.main`
  flex: 2;
  background-color: #fff;
  border-radius: 12px;
  min-height: 600px;
`;

const StickySidebarWrapper = styled.aside`
  flex: 1;
  position: sticky;
  top: 0px;
  height: fit-content;
`;

export default function ProfilePage() {
  return (
    <Container>
      <CenterArea>
        <CenterProfile />
      </CenterArea>
      <StickySidebarWrapper>
        <RightSidebar />
      </StickySidebarWrapper>
    </Container>
  );
}
