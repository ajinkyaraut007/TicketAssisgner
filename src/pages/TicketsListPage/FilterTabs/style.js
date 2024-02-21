import { Grid, Button, styled } from "@mui/material";

export const FilterTabsWrapper = styled(Grid)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 16px 8px 32px",

  ".left-wrapper": {
    display: "flex",
    height: "100%",
    gap: "8px",
  },
  ".right-wrapper": {
    display: "flex",
    gap: "8px",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
    },
  },
}));

export const StyledBtn = styled(Button)(() => ({
  height: "36px",
}));
