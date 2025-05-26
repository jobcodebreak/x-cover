// 사용자의 프로필 정보, 탭 메뉴 (Posts, Replies, Media 등), 팔로우 추천, 모달 창, 캐러셀(이미지 뷰어) 등을 포함한 SNS 스타일 프로필 페이지

import styled from "styled-components";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import EditProfileModal from "./EditProfileModal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../../../slices/userProfileSlice";
import TabsSection from "../profilepage/profiletabs/ProfileTabs";

const ProfilePage = () => {
  //==============================Edit profile 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  //==============================프로필 수정 모달
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  //==============================useNavigate사용 백 아이콘 클릭 시 홈으로
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };
  //==============================useSelector사용해 상태 가져오기
  const UP = useSelector(selectUserProfile);
  //=============================store에서 상태 바로 가져옴
  // const UP = useSelector((state) => state.userProfile);
  //============================== 모달 열릴 때 스크롤 막기
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    //============================== 컴포넌트 unmount 시 스크롤 원복
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <Container>
      {/* ===== 헤더 ===== */}
      <Header>
        <BackIcon onClick={handleBackClick} />
        <HeaderInfo>
          <Name>{UP.name}</Name>
          <Tweets>{UP.postsCount} posts</Tweets>
        </HeaderInfo>
      </Header>
      {/* ===== 프로필 ===== */}
      <Banner />
      <EditProfile>
        <EditButton onClick={openModal}>Edit profile</EditButton>
      </EditProfile>
      {isModalOpen && <EditProfileModal onClose={closeModal} />}
      <Avatar src={UP.avatar} />
      {/* ===== 유저 정보 ===== */}
      <ProfileContent>
        <NameTag>
          <DisplayName>{UP.name}</DisplayName>
          <Username>{UP.username}</Username>
        </NameTag>
        <Bio>{UP.bio}</Bio>
        <Joined>
          <FaCalendarAlt size={14} style={{ marginRight: "4px" }} />
          Joined {UP.joinedDate}
        </Joined>
        <FollowStats>
          <span>
            <strong>{UP.followingCount}</strong> Following
          </span>
          <span>
            <strong>{UP.followersCount}</strong> Followers
          </span>
        </FollowStats>
      </ProfileContent>
      <TabsSection />
    </Container>
  );
};

export default ProfilePage;

//==============================styled-components

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
  cursor: pointer;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.9);
  }
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
