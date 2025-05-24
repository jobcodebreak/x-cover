import styled from "styled-components";
import PostCard from "../PostCard";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserRecommendations } from "../../../../slices/userRecommendationsSlice";
import { selectPosts } from "../../../../slices/postsSlice";

const PostsSection = () => {
  //==============================반복 횟수 상태 추가
  const [userRepeatCount, setUserRepeatCount] = useState(1);
  //==============================Show more 클릭 시 반복 수 증가
  const handleShowMore = () => {
    setUserRepeatCount((prev) => prev + 1);
  };
  //==============================useSelector사용해 상태 가져오기
  const UR = useSelector(selectUserRecommendations);
  const Po = useSelector(selectPosts);

  return (
    <Container>
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
    </Container>
  );
};
export default PostsSection;

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
