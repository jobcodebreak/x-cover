import styled from "styled-components";
import { FaLock } from "react-icons/fa";

const LikesSection = () => {
  return (
    <Container>
      <Likes>
        <FaLock style={{ marginRight: "8px" }} />
        Your likes are private. Only you can see them.
      </Likes>
    </Container>
  );
};
export default LikesSection;

//==============================styled-components

const Container = styled.div`
  font-family: system-ui, sans-serif;
  min-width: 600px;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
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
