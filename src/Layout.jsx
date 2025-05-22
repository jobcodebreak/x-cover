import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MenuBar from "./components/MenuBar";

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1300px;
`;

const StickyMenuBar = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 250px;
  flex-shrink: 0;
  background-color: #fff;
`;

function Layout() {
  return (
    <>
      <LayoutWrapper>
        <StickyMenuBar>
          <MenuBar />
        </StickyMenuBar>
        <Outlet />
      </LayoutWrapper>
    </>
  );
}

export default Layout;
