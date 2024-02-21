import React from "react";
import HomeIcon from "@mui/icons-material/Home"
import MenuIcon from "@mui/icons-material/Menu";

import NameAvatar from "../../NameAvatar";

import { HeaderWrapper, HomeIconWrappper } from "./style";
import { SideBarItem } from "../SideBar/style";
import { Box } from "@mui/material";

//box and sidebar
const Header = ({isSideBarActive, handleHamburgerClick}) => {
  return (
    <HeaderWrapper>
      
      <Box sx={{display: 'flex'}}>
        {!isSideBarActive? <SideBarItem>
            <MenuIcon className="menu-icon" onClick={handleHamburgerClick}/>
          </SideBarItem> : ''}
          
          <HomeIconWrappper>  
        <HomeIcon />
      </HomeIconWrappper>
      </Box>
      

      <NameAvatar label="SG" showBadge />
    </HeaderWrapper>
  );
};

export default Header;
