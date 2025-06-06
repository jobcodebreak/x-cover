import React, { useState } from "react";
import styled from "styled-components";
import CommentModal from "./CommentModal";
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaRetweet,
  FaChartBar,
  FaRegBookmark,
  FaBookmark,
  FaShare,
} from "react-icons/fa";

const ReplieCard = ({
  profileImage,
  displayName,
  username,
  date,
  replyingTo,
  text,
  hashtag,
  postImage,
}) => {
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isBookmarkActive, setIsBookmarkActive] = useState(false);
  const handleLikeClick = () => setIsLikeActive((prev) => !prev);
  const handleBookmarkClick = () => setIsBookmarkActive((prev) => !prev);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <CardContainer>
      <ProfileImage src={profileImage} />
      <Content>
        <Header>
          <DisplayName>{displayName}</DisplayName>
          <Username>
            @{username} · {date}
          </Username>
        </Header>
        <Header2>
          <Label>Replying to</Label>
          <ReplyingTo>{replyingTo}</ReplyingTo>
        </Header2>
        <Text>{text}</Text>
        <Hashtag>{hashtag}</Hashtag>
        <PostImage src={postImage} />
        <Actions>
          <LeftActions>
            <CommentButton onClick={openModal}>
              <FaRegComment />
            </CommentButton>
            {isModalOpen && (
              <CommentModal
                onClose={closeModal}
                post={{
                  profileImage,
                  displayName,
                  username,
                  date,
                  text,
                  hashtag,
                  postImage,
                }}
              />
            )}
            <RetweetButton>
              <FaRetweet />
            </RetweetButton>
            <LikeButton active={isLikeActive} onClick={handleLikeClick}>
              {isLikeActive ? <FaHeart /> : <FaRegHeart />}
            </LikeButton>
            <ViewButton>
              <FaChartBar />
            </ViewButton>
          </LeftActions>
          <RightActions>
            <BookmarkButton
              active={isBookmarkActive}
              onClick={handleBookmarkClick}
            >
              {isBookmarkActive ? <FaBookmark /> : <FaRegBookmark />}
            </BookmarkButton>
            <SharekButton>
              <FaShare />
            </SharekButton>
          </RightActions>
        </Actions>
      </Content>
    </CardContainer>
  );
};

export default ReplieCard;

//==============================styled-components

const CardContainer = styled.div`
  max-width: 600px;
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #e1e8ed;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.9);
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
`;

const DisplayName = styled.span`
  font-size: 16px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Username = styled.span`
  color: #657786;
  font-weight: 500;
`;

const Header2 = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
`;

const Label = styled.div`
  color: #657786;
`;

const ReplyingTo = styled.div`
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.div`
  margin: 4px 0;
`;

const Hashtag = styled.div`
  color: #1da1f2;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 16px;
  margin-top: 8px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #657786;
  width: 100%;
`;

const LeftActions = styled.div`
  width: 300px;
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
  color: #657786;

  svg {
    cursor: pointer;
  }
`;

const IconButtonBase = styled.div`
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const CommentButton = styled(IconButtonBase)`
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
  &:hover svg {
    fill: rgb(29, 161, 242);
  }
`;

const RetweetButton = styled(IconButtonBase)`
  &:hover {
    background-color: rgba(23, 191, 99, 0.1);
  }
  &:hover svg {
    fill: rgb(23, 191, 99);
  }
`;

const LikeButton = styled(IconButtonBase)`
  &:hover {
    background-color: rgba(224, 36, 94, 0.1);
  }
  &:hover svg {
    fill: rgb(224, 36, 94);
  }
  svg {
    fill: ${({ active }) => (active ? "rgb(224, 36, 94)" : "#657786;")};
    transition: fill 0.2s ease;
  }
`;

const ViewButton = styled(IconButtonBase)`
  &:hover {
    background-color: rgba(136, 153, 166, 0.1);
  }
  &:hover svg {
    fill: rgb(136, 153, 166);
  }
`;

const RightActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  color: #657786;

  svg {
    cursor: pointer;
  }
`;

const BookmarkButton = styled(IconButtonBase)`
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
  &:hover svg {
    fill: rgb(29, 161, 242);
  }
  svg {
    fill: ${({ active }) => (active ? "rgb(29, 161, 242)" : "#657786;")};
    transition: fill 0.2s ease;
  }
`;

const SharekButton = styled(IconButtonBase)`
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
  &:hover svg {
    fill: rgb(29, 161, 242);
  }
`;
