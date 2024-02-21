import { Chip, styled } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import CircleIcon from "@mui/icons-material/Circle";

export const ChipMap = {
  //openClose status
  primary: {
    backgroundColor: "#FFD07B",
    icon: <CircleIcon />,
    textColor: "#80531B",
    width: "7px",
    height: "7px",
  },
  //failure
  secondary: {
    backgroundColor: "#BBDEFB",
    icon: <SettingsIcon />,
    textColor: "#1565C0",
    width: "16px",
    height: "16px",
  },
  //athenian
  ternary: {
    border: "1px solid #04487F",
    backgroundColor: "#FFF",
    textColor: "#04487F",
    icon: <DirectionsBoatFilledIcon />,
    width: "16px",
    height: "16px",
  },
};

export const StyledChip = styled(Chip)(({ variant }) => ({
  height: "24px",
  borderRadius: "100px",
  color: "white",
  backgroundColor: ChipMap?.[variant]?.backgroundColor,
  border: ChipMap?.[variant]?.border,

  "& .MuiChip-label": {
    color: ChipMap?.[variant]?.textColor,
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "17px",
    padding: "4px 12px 4px 4px",
  },
  //top right bottom left
  "& .MuiChip-icon": {
    borderColor: "#1565C0",
    color: "#1565C0",
    height: ChipMap?.[variant]?.height,
    width: ChipMap?.[variant]?.height,
    padding: "4px 4px 4px 4px",
  },
}));
