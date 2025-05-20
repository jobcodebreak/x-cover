import styled from "styled-components";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import ProfileTabs from "./ProfileTabs";
import PostCard from "./PostCard";

const ProfilePage = () => {
  return (
    <Container>
      <Header>
        <BackIcon />
        <HeaderInfo>
          <Name>세종대왕</Name>
          <Tweets>2 posts</Tweets>
        </HeaderInfo>
      </Header>
      <Banner />
      <Avatar src="https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800" />
      <ProfileContent>
        <NameTag>
          <DisplayName>세종대왕</DisplayName>
          <Username>@KingSejong_theGreat</Username>
        </NameTag>
        <Bio>king of Joseon, The creator of Hangul</Bio>
        <Joined>
          <FaCalendarAlt size={14} style={{ marginRight: "4px" }} />
          Joined June 1418
        </Joined>
        <FollowStats>
          <span>
            <strong>1</strong> Following
          </span>
          <span>
            <strong>1</strong> Followers
          </span>
        </FollowStats>
      </ProfileContent>
      <ProfileTabs />
      <PostCard
        profileImage="https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800"
        displayName="세종대왕"
        username="KingSejong_theGreat"
        date="Oct 10,1434"
        text="영실이가 만들어준 앙부일구"
        hashtag="#앙부일구 #장영실"
        postImage="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Seoul-Gyeongbokgung-Sundial-02.jpg/330px-Seoul-Gyeongbokgung-Sundial-02.jpg"
      />
      <PostCard
        profileImage="https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800"
        displayName="세종대왕"
        username="KingSejong_theGreat"
        date="Sep 9,1418"
        text="즉위식을 위한 증명사진"
        hashtag="#증명사진"
        postImage="https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800"
      />
    </Container>
  );
};

export default ProfilePage;

// ======================= styled-components =========================

const Container = styled.div`
  font-family: system-ui, sans-serif;
  width: 600px;
  /* margin: 0 auto; */
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background: white;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ddd;
  z-index: 10;
`;

const BackIcon = styled(FaArrowLeft)`
  font-size: 18px;
  margin-right: 16px;
  cursor: pointer;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
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
