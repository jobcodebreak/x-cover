import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";
import SearchList from "../components/SearchList";

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
function SearchPage() {
  return (
    <Container>
      <MainContainer>
        <SearchList />
      </MainContainer>
      <RightSidebar />
    </Container>
  );
}

export default SearchPage;
