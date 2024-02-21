import { Box, Grid, styled } from "@mui/material";

export const TicketsListContainer = styled(Grid)(() => ({
  flex: 1,
  padding: "16px",
  backgroundColor: "#EFF1F1",
  overflow: "auto",
}));

export const TicketListWrapper = styled(Box)(() => ({
  borderRadius: "4px",
  backgroundColor: "#FFF",
}));

export const GridWrapper = styled(Grid)(({theme}) => ({
  [theme.breakpoints.down("sm")]: {
    display: 'none'
  },
}));
