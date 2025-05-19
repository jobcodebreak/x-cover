import React from "react";
import styled from "styled-components";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import CenterProfile from "../components/CenterProfile";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
`;

const Center = styled.main`
  flex: 2;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  min-height: 600px;
`;

export default function ProfilePage() {
  return (
    <Container>
      <CenterProfile />
      <RightSidebar />
    </Container>
  );
}
