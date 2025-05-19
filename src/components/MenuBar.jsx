import styled from "styled-components";
import homeIcon from "../assets/icons/home.svg";
import magnifyingIcon from "../assets/icons/magnifying-glass.svg";
import bellIcon from "../assets/icons/bell.svg";
import messageIcon from "../assets/icons/message.svg";
import listIcon from "../assets/icons/list.svg";
import bookmarkIcon from "../assets/icons/bookmark.svg";
import usersIcon from "../assets/icons/users.svg";
import profileIcon from "../assets/icons/profile.svg";
import moreIcon from "../assets/icons/more.svg";
import boltIcon from "../assets/icons/bolt.svg";
import logo from "../assets/xLogo.png";
import ellipsisIcon from "../assets/icons/ellipsis-circle.svg";
import userIcon from "../assets/icons/user.svg";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", icon: homeIcon, path: "/" },
  { label: "Explore", icon: magnifyingIcon, path: "/search" },
  { label: "Notification", icon: bellIcon },
  { label: "Messages", icon: messageIcon },
  { label: "Lists", icon: listIcon },
  { label: "Bookmarks", icon: bookmarkIcon },
  { label: "Communities", icon: usersIcon },
  { label: "Verified Orgs", icon: boltIcon },
  { label: "Profile", icon: profileIcon, path: "/profile" },
  { label: "More", icon: moreIcon },
];

function MenuBar() {
  return (
    <Container>
      <Logo>
        <Img src={logo}></Img>
      </Logo>
      {menuItems.map((item) => (
        <Link to={item.path} key={item.label}>
          <IconContainer>
            <Img src={item.icon} alt={item.label} />
            <span>{item.label}</span>
          </IconContainer>
        </Link>
      ))}
      <PostBtn>Post</PostBtn>
      <UserBox>
        <UserInfoWrapper>
          <Img src="https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800" />
          <NameTag>
            <DisplayName>세종대왕</DisplayName>
            <Username>@KingSejong_theGreat</Username>
          </NameTag>
          <Img src={ellipsisIcon} />
        </UserInfoWrapper>
      </UserBox>
    </Container>
  );
}

export default MenuBar;

// ======================= styled-components =========================

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;

const IconContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 6px 14px;
  border: none;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const PostBtn = styled.button`
  width: 200px;
  height: 50px;
  font-size: 16px;
  border-radius: 30px;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const Logo = styled.button`
  border: none;
  background-color: white;
  display: flex;
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
  padding: 20px 0px;
`;

const UserInfoWrapper = styled.div`
  gap: 10px;
  display: flex;
  padding: 6px 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const NameTag = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayName = styled.div`
  padding-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const Username = styled.div`
  color: gray;
  font-size: 15px;
`;
