import { Box, styled } from "@mui/material";

export const LayoutContainer = styled(Box)(({theme}) => ({
  display: "flex",
  
  [theme.breakpoints.up("sm")]: {
    height: "100vh",
  },
}));

export const RightSideWrapper = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));
