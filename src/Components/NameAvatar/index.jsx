import { StyledAvatar, StyledBadge } from "./style";

const NameAvatar = ({ label, showBadge, size = "medium" }) => {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant={showBadge ? "dot" : ""}
    >
      <StyledAvatar size={size}>{label}</StyledAvatar>
    </StyledBadge>
  );
};

export default NameAvatar;
