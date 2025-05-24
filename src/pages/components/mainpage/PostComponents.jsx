import styled from "styled-components";
import gifIcon from "../../../assets/icons/gif.svg";
import photoIcon from "../../../assets/icons/photo.svg";
import locationIcon from "../../../assets/icons/location.svg";
import smileIcon from "../../../assets/icons/smile.svg";
import fireIcon from "../../../assets/icons/fire.svg";
const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) => (props.isReply ? "none" : "1px solid #ddd")};
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  padding: ${(props) => (props.isReply ? "20px" : "none")};
`;
const PostWrite = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;
const WriteInput = styled.input.attrs((props) => ({
  placeholder: props.isReply ? "Post your reply" : "What's happening?",
}))`
  padding: 12px;
  font-size: 20px;
  border: none;
  outline: none;
`;

const IconsWrite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: ${(props) => (props.isReply ? "0px 15px" : "10px 60px")};
  cursor: pointer;
`;
const IconsImg = styled.img`
  width: 20px;
  height: 20px;
`;
const PostBtn = styled.button`
  border-radius: 20px;
  background-color: #a7a7a7;
  color: white;
  width: 60px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

function PostComponents({ type = "post" }) {
  const isReply = type === "reply";
  return (
    <>
      <PostWrapper isReply={isReply}>
        <PostWrite>
          <UserImg src="https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800" />
          <WriteInput isReply={isReply} />
        </PostWrite>
        <IconsWrite>
          <IconsWrapper isReply={isReply}>
            <IconsImg src={photoIcon} />
            <IconsImg src={gifIcon} />
            <IconsImg src={fireIcon} />
            <IconsImg src={smileIcon} />
            <IconsImg src={locationIcon} />
          </IconsWrapper>
          <PostBtn>{isReply ? "Reply" : "Post"}</PostBtn>
        </IconsWrite>
      </PostWrapper>
    </>
  );
}

export default PostComponents;
