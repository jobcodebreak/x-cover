import styled from "styled-components";
import { FaLock } from "react-icons/fa";

const LikesSection = () => {
  return (
    <Container>
      <Likes>
        <FaLock style={{ marginRight: "8px" }} />
        Your likes are private. Only you can see them.
      </Likes>
      <Text>
        <LikesTitle>You don’t have any likes yet</LikesTitle>
        <LikesInfo>
          Tap the heart on any post to show it some love. When you do, it’ll
          show up here.
        </LikesInfo>
      </Text>
    </Container>
  );
};
export default LikesSection;

//==============================styled-components

const Container = styled.div`
  font-family: system-ui, sans-serif;
  min-width: 600px;
`;

const Text = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: white;
  margin: 0 auto;
`;

const Likes = styled.div`
  max-width: 600px;
  display: flex;
  align-items: left;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: #eafaff;
`;

const LikesTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #0f1419;
  margin: 0 0 15px 0;
`;

const LikesInfo = styled.div`
  font-size: 15px;
  color: #536471;
  margin: 0 0 30px 0;
  line-height: 20px;
`;
