import React from "react";
import { Divider, Grid } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import GroupAvatar from "../../../Components/GroupAvatar";
import { TextLabel, TextValue } from "../../../Components/Typography";
import NameAvatar from "../../../Components/NameAvatar";
import Chip from "../../../Components/Chip";
import { ShareIcon } from "../../../assets/images";

import {
  MyComponent,
  ProgressElement,
  ProgressWrapper,
  TicketDetailsWrapper,
} from "./style";
import StatusIcon from "../../../Components/StatusIcon";

const TicketDetails = ({ data }) => {
  return (
    <TicketDetailsWrapper>
      <Grid container p={2} spacing={2}>
        <Grid item xs={6}>
          <TextLabel>Ticket Number</TextLabel>
          <TextValue>{data.issue_number}</TextValue>
        </Grid>
        <Grid item xs>
          <Chip label={data.status} variant="primary" />
        </Grid>
        <Grid item>
          <img src={ShareIcon} alt="Share Icon" />
        </Grid>
        <Grid item xs={6}>
          <TextLabel>Agent</TextLabel>
          <TextValue>
            <NameAvatar size="small" label="SG" /> {data.assigned_name}
          </TextValue>
        </Grid>
        <Grid item xs={6}>
          <TextLabel>Due</TextLabel>
          <TextValue>{data.due}</TextValue>
        </Grid>
      </Grid>
      <Divider />

      <Grid container p={2} spacing={2}>
        <Grid item xs={6}>
          <TextLabel>Resolution Team</TextLabel>
          <GroupAvatar />
        </Grid>
        <Grid item xs={6}>
          <TextLabel>Tasks</TextLabel>
          <ProgressWrapper>
            <ProgressElement></ProgressElement>{" "}
            <TextValue>{data.task}</TextValue>
          </ProgressWrapper>
        </Grid>
      </Grid>
      <Divider />

      <Grid container p={2} spacing={2}>
        <Grid item xs={6}>
          <TextLabel>Raised By</TextLabel>
          <TextValue>
            <NameAvatar size="small" label="BI" /> {data.raised_by}
          </TextValue>
        </Grid>
        <Grid item xs={6}>
          <TextLabel>Created On</TextLabel>
          <TextValue>{data.created_on}</TextValue>
        </Grid>
      </Grid>
      <Divider />

      <Grid container p={2} spacing={2}>
        <Grid item xs={1}>
          {/* <ArrowCircleUpIcon /> */}
          <StatusIcon data={data} />
        </Grid>
        <Grid item xs={5}>
          <Chip label="Athenian Phoenix" variant="ternary" />
        </Grid>
        <Grid item xs={5}>
          <Chip label="Equipment Failure" variant="secondary" />
        </Grid>
      </Grid>
    </TicketDetailsWrapper>
  );
};

export default TicketDetails;
