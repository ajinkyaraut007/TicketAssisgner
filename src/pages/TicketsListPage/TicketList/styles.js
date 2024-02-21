import { Box, Grid, TableCell, TableRow, Typography, styled } from "@mui/material";

export const TicketHeadings = styled(Typography)(() => ({
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "18px",
  color: "#00704B",
  marginRight: "10px",
}));

export const FilteredTableCell = styled(TableCell)(({ theme }) => ({
  padding: "8px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const FlexBox = styled(Box)(() => ({
  display: "flex",

  "&.alignedFlexBox": {
    alignItems: "center",
    gap: "8px",
  },
}));

export const FilteredTableRow = styled(TableRow)(({ theme }) => ({
  verticalAlign: "top",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
  ".filteredDisplay": {
    marginRight: "8px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  ".filteredDisplaySM": {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
