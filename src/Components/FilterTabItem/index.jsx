import { FilterTabWrapper, StyledCount, StyledLabel } from "./style";

const FilterTabItem = ({ isActive, count, color, label, handleClick }) => {
  return (
    <FilterTabWrapper isActive={isActive} onClick={handleClick}>
      <StyledCount color={color}>{count}</StyledCount>
      <StyledLabel variant="subtitle2" gutterBottom>
        {label}
      </StyledLabel>
    </FilterTabWrapper>
  );
};

export default FilterTabItem;
