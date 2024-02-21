import { Avatar, Badge, styled } from "@mui/material";

export const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#68DA6A",
    color: "#44B700",
  },
}));

export const StyledAvatar = styled(Avatar)(({ size }) => ({
  color: "#004D40",
  backgroundColor: "#B2DFDB",
  fontSize: size === "medium" ? "16px" : "11px",
  lineHeight: size === "medium" ? "20px" : "14px",
  width: size === "medium" ? "32px" : "22px",
  height: size === "medium" ? "32px" : "22px",
}));
