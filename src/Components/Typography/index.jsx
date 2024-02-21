import { Typography, styled } from "@mui/material";

export const TextLabel = styled(Typography)(() => ({
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "16px",
  marginBottom: "4px",
  color: "#697E85",
  '&.updatesTag': {
    minWidth: '75px'
  }
}));

export const TextValue = styled(Typography)(({theme}) => ({
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "18px",
  '&.TicketDescriptionInfo' :{
    color : 'rgba(0, 0, 0, 0.6)'
  },
  '&.TicketDescription' :{
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "20px",
    color: '#052E2B'
  },
  '&.TicketComment' :{
    fontSize: "13px",
    lineHeight: "17px",
    color: '#757575',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  // '&.TicketHeadings' :{
  //   fontSize: "14px",
  //   lineHeight: "17px",
  //   color: '#00704B',
  //   fontWeight: "600",
  // }
}));
