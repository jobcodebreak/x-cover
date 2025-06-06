import styled from "styled-components";
import homeIcon from "../assets/icons/home.svg";
import magnifyingIcon from "../assets/icons/magnifying-glass.svg";
import bellIcon from "../assets/icons/bell.svg";
import messageIcon from "../assets/icons/message.svg";
import listIcon from "../assets/icons/list.svg";
import bookmarkIcon from "../assets/icons/bookmark.svg";
import usersIcon from "../assets/icons/users.svg";
import moreIcon from "../assets/icons/more.svg";
import boltIcon from "../assets/icons/bolt.svg";
import logoIcon from "../assets/icons/logo.svg";
import ellipsisIcon from "../assets/icons/ellipsis-circle.svg";
import profileIcon from "../assets/icons/user.svg";
import fillProfileIcon from "../assets/icons/fillProfile.svg";
import fillHomeIcon from "../assets/icons/fillHome.svg";
import fillMagnifying from "../assets/icons/fillMagnifying-glass.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 10px;
  padding: 20px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;
const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;
const IconContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  padding: 10px;
  border-radius: 20px;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const PostBtn = styled.button`
  border-radius: 30px;
  padding: 15px 20px;
  background-color: black;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #292828;
  }
`;

const Logo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: white;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(1, 1, 1, 0.1);
  }
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
  padding: 6px 14px;
  border-radius: 30px;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  font-size: 10px;
`;
const menuItems = [
  { label: "Home", icon: homeIcon, fillIcon: fillHomeIcon, path: "/" },
  {
    label: "Explore",
    icon: magnifyingIcon,
    fillIcon: fillMagnifying,
    path: "/search",
  },
  { label: "Notification", icon: bellIcon },
  { label: "Messages", icon: messageIcon },
  { label: "Lists", icon: listIcon },
  { label: "Bookmarks", icon: bookmarkIcon },
  { label: "Communities", icon: usersIcon },
  { label: "Verified Orgs", icon: boltIcon },
  {
    label: "Profile",
    icon: profileIcon,
    fillIcon: fillProfileIcon,
    path: "/profile",
  },
  { label: "More", icon: moreIcon },
];

function MenuBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  //useNavigate사용 백 아이콘 클릭 시 홈으로
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <Container>
      <Logo>
        <Img onClick={handleBackClick} src={logoIcon} />
      </Logo>
      {menuItems.map((item) => (
        <Link to={item.path} key={item.label}>
          <IconContainer>
            <Img
              src={
                item.path && currentPath === item.path
                  ? item.fillIcon
                  : item.icon
              }
              alt={item.label}
            />
            <span>{item.label}</span>
          </IconContainer>
        </Link>
      ))}
      <PostBtn>Post</PostBtn>
      <UserBox>
        <UserInfoWrapper>
          <UserImg src="https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800" />
          <NameTag>
            <DisplayName>세종대왕</DisplayName>
            <Username>@KingSejong_theGreat</Username>
          </NameTag>
        </UserInfoWrapper>
        <Img src={ellipsisIcon} />
      </UserBox>
    </Container>
  );
}

export default MenuBar;
