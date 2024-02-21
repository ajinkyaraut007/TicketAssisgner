import React from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HandymanIcon from "@mui/icons-material/Handyman";
import WarningIcon from "@mui/icons-material/Warning";
import SettingsIcon from "@mui/icons-material/Settings";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

import { PackageIcon, SiteIcon } from "../../../assets/images";

import { SideBarItem, SideBarWrapper } from "./style";

const SideBarOptionList = [
  {
    key: "1",
    icon: <img src={PackageIcon} alt="Package Icon" />,
  },
  {
    key: "2",
    icon: <WarningIcon />,
  },
  {
    key: "3",
    icon: <EngineeringIcon />,
  },
  {
    key: "4",
    icon: <WaterDropIcon />,
  },
  {
    key: "5",
    icon: <SettingsIcon />,
  },
  {
    key: "6",
    icon: <HandymanIcon />,
  },
];

const SideBar = ({isSideBarActive,handleHamburgerClick }) => {
  return (
    <SideBarWrapper>
      <Box>
        <Box mb={4}>
          <SideBarItem isSideBarActive={isSideBarActive}>
            <MenuIcon className="menu-icon" onClick={handleHamburgerClick}/>
          </SideBarItem>
        </Box>

        <Box display="flex" flexDirection="column" gap="12px">
          {SideBarOptionList.map((item) => (
            <SideBarItem key={item.key}>{item.icon}</SideBarItem>
          ))}
        </Box>
      </Box>

      <Box>
        <SideBarItem>
          <img src={SiteIcon} alt="Site Logo" />
        </SideBarItem>
      </Box>
    </SideBarWrapper>
  );
};

export default SideBar;
