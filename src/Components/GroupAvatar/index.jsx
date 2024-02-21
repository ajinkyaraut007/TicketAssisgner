import { Avatar } from "@mui/material";

import { StyledGroupAvatar } from "./style";

const GroupAvatar = () => {
  return (
    <StyledGroupAvatar max={4}>
      <Avatar>AB</Avatar>
      <Avatar >CD</Avatar>
      <Avatar>GH</Avatar>
      <Avatar >HI</Avatar>
      <Avatar>JK</Avatar>
      <Avatar>LM</Avatar>
    </StyledGroupAvatar>
  );
};

export default GroupAvatar;
