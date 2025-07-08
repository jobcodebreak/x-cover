import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";
import SearchList from "./components/searchpage/SearchList";


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
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  &::-webkit-scrollbar {
    display: none;
  }
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
