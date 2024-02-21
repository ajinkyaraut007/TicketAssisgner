import { ChipMap, StyledChip } from "./style";

const Chip = ({ label, variant }) => {
  return (
    <StyledChip
      icon={ChipMap?.[variant]?.icon}
      label={label}
      variant={variant}
    />
  );
};

export default Chip;
