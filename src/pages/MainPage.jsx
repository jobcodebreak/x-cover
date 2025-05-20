import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";

const Container = styled.div`
  background: white;
  font-family: sans-serif;
  display: flex;
  justify-content: center;

  gap: 20px;
`;
const MainContainer = styled.div`
  font-family: system-ui, sans-serif;
  width: 600px;
  padding: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;

function MainPage() {
  return (
    <Container>
      <MainContainer>메인페이지</MainContainer>
      <RightSidebar />
    </Container>
  );
}

export default MainPage;
