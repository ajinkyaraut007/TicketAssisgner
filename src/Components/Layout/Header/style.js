import { Box, styled } from "@mui/material";

export const HeaderWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "6px 16px",
}));

export const HomeIconWrappper = styled(Box)(() => ({
  padding: "4px",
  marginBottom: "-8px",
  borderBottom: "2px solid #000",
  cursor: "pointer",
}));
