import styled from "styled-components";
import { FaArrowLeft, FaCalendarAlt, FaLock } from "react-icons/fa";
import ProfileTabs from "./ProfileTabs";
import PostCard from "./PostCard";
import React, { useState, useEffect } from "react";
import ReplieCard from "./ReplieCard";
import EditProfileModal from "./EditProfileModal";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import UserProfile from "./data/UserProfile";
import posts from "./data/posts";
import userRecommendations from "./data/userRecommendations";
import replies from "./data/replies";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const mediaImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Seoul-Gyeongbokgung-Sundial-02.jpg/330px-Seoul-Gyeongbokgung-Sundial-02.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800",
  ];
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const openCarousel = (index) => {
    setCarouselIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  //useNavigate사용 백 아이콘 클릭 시 홈으로
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };
  // 모달 열릴 때 스크롤 막기
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // 컴포넌트 unmount 시 스크롤 원복
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <Container>
      <Header>
        <BackIcon onClick={handleBackClick} />
        <HeaderInfo>
          <Name>{UserProfile.name}</Name>
          <Tweets>{UserProfile.postsCount} posts</Tweets>
        </HeaderInfo>
      </Header>
      <Banner />
      <EditProfile>
        <EditButton onClick={openModal}>Edit profile</EditButton>
      </EditProfile>
      {isModalOpen && <EditProfileModal onClose={closeModal} />}
      <Avatar src={UserProfile.avatar} />
      <ProfileContent>
        <NameTag>
          <DisplayName>{UserProfile.name}</DisplayName>
          <Username>{UserProfile.username}</Username>
        </NameTag>
        <Bio>{UserProfile.bio}</Bio>
        <Joined>
          <FaCalendarAlt size={14} style={{ marginRight: "4px" }} />
          Joined {UserProfile.joinedDate}
        </Joined>
        <FollowStats>
          <span>
            <strong>{UserProfile.followingCount}</strong> Following
          </span>
          <span>
            <strong>{UserProfile.followersCount}</strong> Followers
          </span>
        </FollowStats>
      </ProfileContent>
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Posts" && (
        <>
          {posts.map((post, index) => (
            <PostCard
              key={index}
              profileImage={post.profileImage}
              displayName={post.displayName}
              username={post.username}
              date={post.date}
              text={post.text}
              hashtag={post.hashtag}
              postImage={post.postImage}
            />
          ))}
          <Section>
            <SectionTitle>Who to follow</SectionTitle>
            <UserRecommendList>
              {userRecommendations.map((user, index) => (
                <UserRecommendItem key={index}>
                  <SectionAvatar src={user.avatar} alt={`User${index + 1}`} />
                  <div>
                    <UserName>{user.name}</UserName>
                    <UserHandle>{user.handle}</UserHandle>
                    <UserComment>{user.comment}</UserComment>
                  </div>
                  <FollowButton>Follow</FollowButton>
                </UserRecommendItem>
              ))}
            </UserRecommendList>
            <ShowMore>Show more</ShowMore>
          </Section>
        </>
      )}
      {activeTab === "Replies" && (
        <>
          {replies.map((reply) => (
            <ReplieCard
              key={reply.id}
              profileImage={reply.profileImage}
              displayName={reply.displayName}
              username={reply.username}
              date={reply.date}
              replyingTo={reply.replyingTo}
              text={reply.text}
              hashtag={reply.hashtag}
              postImage={reply.postImage}
            />
          ))}
          {posts.map((post, index) => (
            <PostCard
              key={index}
              profileImage={post.profileImage}
              displayName={post.displayName}
              username={post.username}
              date={post.date}
              text={post.text}
              hashtag={post.hashtag}
              postImage={post.postImage}
            />
          ))}
          <Section>
            <SectionTitle>Who to follow</SectionTitle>
            <UserRecommendList>
              {userRecommendations.map((user, index) => (
                <UserRecommendItem key={index}>
                  <SectionAvatar src={user.avatar} alt={`User${index + 1}`} />
                  <div>
                    <UserName>{user.name}</UserName>
                    <UserHandle>{user.handle}</UserHandle>
                    <UserComment>{user.comment}</UserComment>
                  </div>
                  <FollowButton>Follow</FollowButton>
                </UserRecommendItem>
              ))}
            </UserRecommendList>
            <ShowMore>Show more</ShowMore>
          </Section>
        </>
      )}
      {activeTab === "Highlights" && (
        <>
          <Highlight>
            <HighlightTitle>Highlight on your profile</HighlightTitle>
            <HighlightInfo>
              You must be subscribed to Premium to highlight posts on your
              profile.
            </HighlightInfo>
            <SubscribeButton>Subscribe to Premium</SubscribeButton>
          </Highlight>
        </>
      )}
      {activeTab === "Articles" && (
        <>
          <Highlight>
            <HighlightTitle>Write Articles on X</HighlightTitle>
            <HighlightInfo>
              You must be subscribed to Premium+ to write Articles on X
            </HighlightInfo>
            <SubscribeButton>Upgrade to Premium+</SubscribeButton>
          </Highlight>
        </>
      )}
      {activeTab === "Media" && (
        <>
          <MediaSection>
            {mediaImages.map((img, idx) => (
              <Media key={idx} onClick={() => openCarousel(idx)}>
                <MediaImg src={img} />
              </Media>
            ))}
          </MediaSection>
          {isCarouselOpen && (
            <Carousel
              images={mediaImages}
              currentIndex={carouselIndex}
              onClose={closeCarousel}
            />
          )}
        </>
      )}
      {activeTab === "Likes" && (
        <>
          <Likes>
            <FaLock style={{ marginRight: "8px" }} />
            Your likes are private. Only you can see them.
          </Likes>
        </>
      )}
    </Container>
  );
};

export default ProfilePage;

// ======================= styled-components =========================

const Container = styled.div`
  font-family: system-ui, sans-serif;
  min-width: 600px;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.9);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const BackIcon = styled(FaArrowLeft)`
  width: 35px;
  height: 35px;
  padding: 10px;
  margin-right: 16px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Tweets = styled.div`
  color: gray;
  font-size: 14px;
`;

const Banner = styled.div`
  background-image: url("https://blog.kakaocdn.net/dn/bDCU0i/btsLA5oAVTo/b6ZvAOcU2eglvaGb1QXKkK/img.webp");
  background-size: cover;
  height: 200px;
`;

const EditProfile = styled.div`
  max-width: 600px;
  position: relative;
`;

const EditButton = styled.div`
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  right: 0;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 10px 15px;
  margin: 15px;
  border-radius: 50px;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Avatar = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 50%;
  border: 4px solid white;
  position: relative;
  top: -70px;
  left: 16px;
`;

const ProfileContent = styled.div`
  padding: 0 16px;
  margin-top: -56px;
`;

const NameTag = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Username = styled.div`
  color: gray;
  font-size: 15px;
  font-weight: 500;
`;

const Bio = styled.div`
  margin: 12px 0;
`;

const Joined = styled.div`
  color: gray;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const FollowStats = styled.div`
  display: flex;
  gap: 20px;
  margin: 12px 0;
  font-size: 15px;
  color: gray;

  strong {
    color: black;
  }
`;

const Section = styled.section`
  padding: 10px 20px 10px 20px;
  max-width: 600px;
`;

const SectionTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const UserRecommendList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserRecommendItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 6px 14px;
  border-radius: 20px;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const UserName = styled.div`
  font-weight: 600;
  margin-bottom: 2px;
`;

const UserHandle = styled.div`
  font-size: 13px;
  color: #657786;
  margin-bottom: 7px;
`;

const ShowMore = styled.div`
  margin-top: 20px;
  font-size: 15px;
  color: #34a5f1;
  padding: 10px 14px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const FollowButton = styled.div`
  font-size: 13px;
  margin-left: auto;
  background-color: black;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: bold;
  border: none;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const SectionAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserComment = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const Highlight = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const MediaSection = styled.div`
  max-width: 600px;
  display: flex;
  align-items: left;
`;

const Media = styled.div`
  max-width: 600px;
  margin: 5px;
  cursor: pointer;
`;

const MediaImg = styled.img`
  width: 185px;
  height: 185px;
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
