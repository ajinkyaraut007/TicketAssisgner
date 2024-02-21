import React, { useState } from "react";
import { Divider } from "@mui/material";

import SideBar from "./SideBar";
import Header from "./Header";

import { LayoutContainer, RightSideWrapper } from "./style";

const Layout = ({ children }) => {
  const [isSideBarActive, setisSideBarActive] = useState(false);

  function handleHamburgerClick() {
    setisSideBarActive(!isSideBarActive);
  }
  //1 change
  return (
    <LayoutContainer>
      {isSideBarActive && <SideBar isSideBarActive={isSideBarActive} handleHamburgerClick={handleHamburgerClick}/>}
      

      <RightSideWrapper>
        <Header isSideBarActive={isSideBarActive} handleHamburgerClick={handleHamburgerClick}/>
        <Divider />

        {children}
      </RightSideWrapper>
    </LayoutContainer>
  );
};

export default Layout;
