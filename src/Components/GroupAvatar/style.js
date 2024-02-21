import { AvatarGroup, styled } from "@mui/material";

export const StyledGroupAvatar = styled(AvatarGroup)(() => ({
  display: "inline-flex",
  "& .MuiAvatar-root": {
    color: "#004D40",
    backgroundColor: "#B2DFDB",
    fontSize: "11px",
    lineHeight: "14px",
    width: "22px",
    height: "22px",
  },
}));


