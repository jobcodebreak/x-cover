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

const Container = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  flex-direction: column;
  height: 100vh;
  gap: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

const IconContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  border: none;
  background-color: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
const PostBtn = styled.button`
  border-radius: 20px;
  padding: 10px;
  background-color: #2ab9fc;
  color: white;
  border: none;
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
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  p {
    font-size: 10px;
    color: #99989887;
  }
  span {
    font-weight: bold;
  }
`;
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
          <Img src={userIcon} />
          <UserDetail>
            <span>User</span>
            <p>User</p>
          </UserDetail>
        </UserInfoWrapper>
        <Img src={ellipsisIcon} />
      </UserBox>
    </Container>
  );
}

export default MenuBar;
