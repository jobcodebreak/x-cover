import styled from "styled-components";
import { FaLock } from "react-icons/fa";
import ProfileTabs from "./ProfileTabs";
import PostCard from "./PostCard";
import React, { useState } from "react";
import ReplieCard from "./ReplieCard";
import Carousel from "../../../hooks/Carousel";
import { useSelector } from "react-redux";
import { selectUserRecommendations } from "../../../slices/userRecommendationsSlice";
import { selectPosts } from "../../../slices/postsSlice";
import { selectReplies } from "../../../slices/repliesSlice";

const TabsSection = () => {
  //==============================프로필 탭 관련
  const [activeTab, setActiveTab] = useState("Posts");
  //==============================캐러셀에 사용되는 이미지
  const mediaImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Seoul-Gyeongbokgung-Sundial-02.jpg/330px-Seoul-Gyeongbokgung-Sundial-02.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800",
  ];
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  //==============================이미지 캐러셀 (Media 탭)
  const openCarousel = (index) => {
    setCarouselIndex(index);
    setIsCarouselOpen(true);
  };
  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };
  //==============================반복 횟수 상태 추가
  const [userRepeatCount, setUserRepeatCount] = useState(1);
  //==============================Show more 클릭 시 반복 수 증가
  const handleShowMore = () => {
    setUserRepeatCount((prev) => prev + 1);
  };
  //==============================useSelector사용해 상태 가져오기
  const UR = useSelector(selectUserRecommendations);
  const Po = useSelector(selectPosts);
  const Re = useSelector(selectReplies);

  return (
    <Container>
      {/* 탭 UI를 표시하고 조작할 수 있도록 props를 넘겨주는 구조 */}
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* ===== 탭 메뉴 ===== */}
      {activeTab === "Posts" && (
        <>
          {Po.map((post, index) => (
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
              {/* 유저 리스트를 userRepeatCount만큼 반복해서 화면에 보여주고, 각각을 UserRecommendItem 컴포넌트로 만들어 렌더링 */}
              {Array.from({ length: userRepeatCount }).flatMap((_, i) =>
                UR.map((user) => (
                  <UserRecommendItem key={`${user.id}-${i}`}>
                    <SectionAvatar src={user.avatar} alt={user.name} />
                    <div>
                      <UserName>{user.name}</UserName>
                      <UserHandle>{user.handle}</UserHandle>
                      <UserComment>{user.comment}</UserComment>
                    </div>
                    <FollowButton>Follow</FollowButton>
                  </UserRecommendItem>
                ))
              )}
            </UserRecommendList>
            <ShowMore onClick={handleShowMore}>Show more</ShowMore>
          </Section>
        </>
      )}
      {activeTab === "Replies" && (
        <>
          {Re.map((reply) => (
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
          {Po.map((post, index) => (
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
              {Array.from({ length: userRepeatCount }).flatMap((_, i) =>
                UR.map((user) => (
                  <UserRecommendItem key={`${user.id}-${i}`}>
                    <SectionAvatar src={user.avatar} alt={user.name} />
                    <div>
                      <UserName>{user.name}</UserName>
                      <UserHandle>{user.handle}</UserHandle>
                      <UserComment>{user.comment}</UserComment>
                    </div>
                    <FollowButton>Follow</FollowButton>
                  </UserRecommendItem>
                ))
              )}
            </UserRecommendList>
            <ShowMore onClick={handleShowMore}>Show more</ShowMore>
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
            {/* 썸네일 목록을 화면에 출력하는 코드 */}
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
export default TabsSection;

//==============================styled-components

const Container = styled.div`
  font-family: system-ui, sans-serif;
  min-width: 600px;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
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
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.9);
  }
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
