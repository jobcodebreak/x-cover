import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MenuBar from "./components/MenuBar";

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1300px;
`;
function Layout() {
  return (
    <>
      <LayoutWrapper>
        <MenuBar />
        <Outlet />
      </LayoutWrapper>
    </>
  );
}

export default Layout;
