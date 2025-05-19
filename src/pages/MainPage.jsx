import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-family: sans-serif;
  padding: 0px 20px;
`;
const LeftMenuBar = styled.div``;
const RightMenuBar = styled.div``;

function MainPage() {
  return (
    <Container>
      <div>메인페이지</div>
    </Container>
  );
}

export default MainPage;
