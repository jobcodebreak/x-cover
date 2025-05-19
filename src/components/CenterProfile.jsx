import styled from "styled-components";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <Container>
      <Header>
        <BackIcon />
        <HeaderInfo>
          <Name>KingSejong</Name>
          <Tweets>25.6K posts</Tweets>
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
            <strong>172</strong> Following
          </span>
          <span>
            <strong>180M</strong> Followers
          </span>
        </FollowStats>
      </ProfileContent>
    </Container>
  );
};

export default ProfilePage;

// ======================= styled-components =========================

const Container = styled.div`
  font-family: system-ui, sans-serif;
  width: 600px;
  margin: 0 auto;
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
`;

const Username = styled.div`
  color: gray;
  font-size: 15px;
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
