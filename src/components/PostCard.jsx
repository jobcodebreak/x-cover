import styled from "styled-components";
import {
  FaRegHeart,
  FaRegComment,
  FaRetweet,
  FaChartBar,
  FaRegBookmark,
  FaShare,
} from "react-icons/fa";

const PostCard = ({
  profileImage,
  displayName,
  username,
  date,
  text,
  hashtag,
  postImage,
}) => {
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
        <Text>{text}</Text>
        <Hashtag>{hashtag}</Hashtag>
        <PostImage src={postImage} />
        <Actions>
          <LeftActions>
            <CommentButton>
              <FaRegComment />
            </CommentButton>
            <RetweetButton>
              <FaRetweet />
            </RetweetButton>
            <LikeButton>
              <FaRegHeart />
            </LikeButton>
            <ViewButton>
              <FaChartBar />
            </ViewButton>
          </LeftActions>
          <RightActions>
            <BookmarkButton>
              <FaRegBookmark />
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

export default PostCard;

// ======================= styled-components =========================
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
`;

const Username = styled.span`
  color: #657786;
  font-weight: 500;
`;

const Text = styled.div`
  margin: 4px 0;
`;

const Hashtag = styled.div`
  color: #1da1f2;
  cursor: pointer;
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
`;

const RetweetButton = styled(IconButtonBase)`
  &:hover {
    background-color: rgba(23, 191, 99, 0.1);
  }
`;

const LikeButton = styled(IconButtonBase)`
  &:hover {
    background-color: rgba(224, 36, 94, 0.1);
  }
`;

const ViewButton = styled(IconButtonBase)`
  &:hover {
    background-color: rgba(136, 153, 166, 0.1);
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
`;

const SharekButton = styled(IconButtonBase)`
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
