import { Box, styled } from "@mui/material";

export const TicketDetailsWrapper = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFF",
  borderRadius: "4px",

}));

// export const ProgressElement = styled('div')(() => ({
  
// }));

export const ProgressElement = styled(Box)({
  background: 'linear-gradient(to left, #68DA6A 50%, #FFB400 50%)',
  width: '48px',
  height: '5px',
  borderRadius: '4px'
});

export const ProgressWrapper = styled(Box)({
    display: 'flex',
    alignItems : 'center',
    gap: '4px'
});
