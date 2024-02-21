import { Box, styled } from "@mui/material";

export const SideBarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: "4px",
  backgroundColor: theme.palette.primary.main,
}));
//2 changes
export const SideBarItem = styled(Box)(({theme, isSideBarActive}) => ({
  padding: '8px',
  cursor: "pointer",

  ".MuiSvgIcon-root": {
    fontSize: "medium",
    color: "#68DA6A",

    "&.menu-icon": {
      color: isSideBarActive?'#fff' : 'black',
    },
  },

  // [theme.breakpoints.down("md")]: {
  //   display: "none",
  // },
}));
