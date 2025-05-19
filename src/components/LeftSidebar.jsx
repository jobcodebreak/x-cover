import styled from "styled-components";
import {
  FaTwitter,
  FaHome,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

export default function LeftSidebar() {
  return (
    <Sidebar>
      <SidebarItem>
        <FaTwitter color="#1DA1F2" size={24} />
      </SidebarItem>
      <SidebarItem>
        <FaHome /> 홈
      </SidebarItem>
      <SidebarItem>
        <FaSearch /> 탐색하기
      </SidebarItem>
      <SidebarItem>
        <FaBell /> 알림
      </SidebarItem>
      <SidebarItem>
        <FaEnvelope /> 쪽지
      </SidebarItem>
      <SidebarItem>
        <FaUser /> 프로필
      </SidebarItem>
    </Sidebar>
  );
}

// ======================= styled-components =========================

const Sidebar = styled.div`
  font-family: system-ui, sans-serif;
  flex: 1;
  max-width: 250px;
  padding: 20px;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  font-size: 18px;
  cursor: pointer;
`;
