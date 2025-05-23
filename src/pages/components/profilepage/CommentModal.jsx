import React, { useState } from "react";
import styled from "styled-components";
import { X } from "lucide-react";
import {
  FaRegImage,
  FaChartBar,
  FaSmile,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function CommentModal({ onClose, post }) {
  const [replyText, setReplyText] = useState("");
  const handleInputChange = (e) => {
    setReplyText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        {/* 헤더 */}
        <Header>
          <CloseBtn onClick={onClose}>
            <X size={24} />
          </CloseBtn>
          <Drafts>Drafts</Drafts>
        </Header>

        {/* 게시물 정보 */}
        <PostInfo>
          <Avatar src={post.profileImage} />
          <PostContent>
            <UserLine>
              <strong>{post.displayName}</strong>{" "}
              <span>
                @{post.username} · {post.date}
              </span>
            </UserLine>
            <TextBlock>
              {post.text}
              <br />
              <Hashtag>{post.hashtag}</Hashtag>
            </TextBlock>
            {post.postImage && <PostImage src={post.postImage} />}
          </PostContent>
        </PostInfo>

        {/* 코멘트 입력란 */}
        <ReplyBox>
          <Avatar2 src={post.profileImage} />
          <ReplyInput
            placeholder="Add another post"
            rows={1}
            value={replyText}
            onChange={handleInputChange}
          />
        </ReplyBox>

        {/* 하단 액션 버튼 & 포스트 버튼 */}
        <BottomActions>
          <LeftIcons>
            <IconButton>
              <FaRegImage />
            </IconButton>
            <IconButton>
              <FaChartBar />
            </IconButton>
            <IconButton>
              <FaSmile />
            </IconButton>
            <IconButton>
              <FaCalendarAlt />
            </IconButton>
            <IconButton>
              <FaMapMarkerAlt />
            </IconButton>
          </LeftIcons>
          <PostBtn disabled={replyText.trim() === ""}>Post</PostBtn>
        </BottomActions>
      </Modal>
    </Overlay>
  );
}

export default CommentModal;

// ======================= 스타일 ========================

const Overlay = styled.div`
  cursor: default;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  max-height: 100vh;
  flex-direction: column;
`;

const Modal = styled.div`
  padding: 2px;
  background: white;
  width: 600px;
  max-height: 90vh;
  border-radius: 16px;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1;
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Drafts = styled.div`
  color: rgb(29, 155, 240);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  font-weight: bold;
  padding: 5px 12px;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  cursor: pointer;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.9);
  }
`;

const Avatar2 = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  transition: filter 0.2s ease;
`;

const PostInfo = styled.div`
  display: flex;
  padding: 12px 16px;
`;

const PostContent = styled.div`
  flex: 1;
`;

const UserLine = styled.div`
  color: black;
  font-size: 15px;
  margin-bottom: 7px;
  font-weight: 600;

  span {
    color: gray;
    font-weight: normal;
  }
`;

const TextBlock = styled.div`
  color: black;
  font-size: 15px;
  white-space: pre-wrap;
`;

const Hashtag = styled.span`
  color: #1d9bf0;
  display: inline-block;
  margin-top: 5px;
`;

const PostImage = styled.img`
  margin-top: 8px;
  width: 40%;
  border-radius: 12px;
`;

const ReplyBox = styled.div`
  display: flex;
  padding: 12px 16px;
`;

const ReplyInput = styled.textarea`
  flex: 1;
  font-size: 20px;
  border: none;
  outline: none;
  resize: none;
  margin: 11.5px 5px 0px 0px;
  font-color: gray;
  font-weight: 600;
  overflow: hidden;
  min-height: 50px;
  line-height: 20px;
`;

const BottomActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`;

const PostBtn = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#777777" : "#0f1419")};
  color: white;
  font-weight: bold;
  border: none;
  padding: 8px 16px;
  border-radius: 9999px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 1 : 1)};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#777777" : "#444444")};
  }
`;
const LeftIcons = styled.div`
  display: flex;
  gap: 14px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1d9bf0;
  font-size: 18px;
  padding: 6px;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;
