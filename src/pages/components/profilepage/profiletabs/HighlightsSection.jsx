import styled from "styled-components";

const HighlightsSection = () => {
  return (
    <Container>
      <Highlight>
        <HighlightTitle>Highlight on your profile</HighlightTitle>
        <HighlightInfo>
          You must be subscribed to Premium to highlight posts on your profile.
        </HighlightInfo>
        <SubscribeButton>Subscribe to Premium</SubscribeButton>
      </Highlight>
    </Container>
  );
};
export default HighlightsSection;

//==============================styled-components

const Container = styled.div`
  font-family: system-ui, sans-serif;
  min-width: 600px;
`;

const Highlight = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 16px;
  background-color: white;
`;

const HighlightTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #0f1419;
  margin: 0 0 15px 0;
`;

const HighlightInfo = styled.div`
  font-size: 15px;
  color: #536471;
  margin: 0 0 30px 0;
  line-height: 20px;
`;

const SubscribeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background-color: #0f1419;
  color: white;
  font-weight: 700;
  padding: 10px 16px;
  font-size: 15px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #272c30;
  }
`;
