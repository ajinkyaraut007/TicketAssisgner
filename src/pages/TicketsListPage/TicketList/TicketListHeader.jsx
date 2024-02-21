import { Box, Typography, styled } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

import SearchInput from "../../../Components/SearchInput";

const TicketListHeaderWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 8px",
  
}));

const TypographyCustom = styled(Typography)(() => ({
  fontSize: "13px",
  lineHeight: "17px",
  fontWeight: "500",
  padding: "5px 8px 5px 8px",
}));

const TicketListHeader = () => {
  return (
    <TicketListHeaderWrapper>
      <Box sx={{ display: "flex" }}>
        <SortIcon />
        <TypographyCustom>SORT</TypographyCustom>
      </Box>
      <Box>
        <SearchInput />
      </Box>
    </TicketListHeaderWrapper>
  );
};

export default TicketListHeader;
