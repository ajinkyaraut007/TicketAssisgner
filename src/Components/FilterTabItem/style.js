import { Box, Typography, styled } from "@mui/material";

export const FilterTabWrapper = styled(Box)(({ isActive }) => ({
  cursor: "pointer",
  padding: "4px 12px",
  borderRadius: "4px",
  backgroundColor: isActive ? "#f2f2f2" : "",
  "&:hover": {
    backgroundColor: "#f2f2f2",
  },
}));

export const StyledCount = styled(Typography)(({ color }) => ({
  color: color || "#03C0D4",
  marginBottom: "0px",
  fontSize: "24px",
  lineHeight: "31px",
}));

export const StyledLabel = styled(Typography)({
  fontSize: "14px",
  lineHeight: "18px",
});
