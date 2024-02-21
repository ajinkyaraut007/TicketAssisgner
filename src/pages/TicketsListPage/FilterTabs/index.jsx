import React, { Fragment, useEffect, useState } from "react";
import { Grid, Divider, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import FilterTabItem from "../../../Components/FilterTabItem";
import { data } from "../../../utils/constants";

import { StyledBtn, FilterTabsWrapper } from "./style";

const FilterTabsList = [
  {
    id: "all",
    count: "0",
    label: "All",
    countColor: "#03C0D4",
  },
  {
    id: "assigned_to_me",
    count: "0",
    label: "Assigned to me",
    countColor: "#03C0D4",
  },
  {
    id: "unassigned",
    count: "0",
    label: "Unassigned",
    countColor: "#FF451A",
  },
  {
    id: "overdue",
    count: "0",
    label: "Overdue",
    countColor: "#FF451A",
  },
  {
    id: "all_open",
    count: "0",
    label: "All open",
    countColor: "#03C0D4",
  },
];

const FilterTabs = ({ activeTab, handleTabClick }) => {
  const [filterTabs, setFilterTabs] = useState([]);

  useEffect(() => {
    const newFilterTabs = FilterTabsList;
    newFilterTabs[0].count = data.length;
    newFilterTabs[1].count = data.filter((obj) => obj.assigned === "AJ").length;
    newFilterTabs[2].count = data.filter((obj) => !obj.assigned).length;
    newFilterTabs[3].count = data.filter((obj) => obj.due === "overdue").length;
    newFilterTabs[4].count = data.filter((obj) => obj.status === "Open").length;
    setFilterTabs(newFilterTabs);
  }, []);

  return (
    <FilterTabsWrapper container gap={2}>
      <Grid item xs={12} sm="auto">
        <Box className="left-wrapper">
          {filterTabs.map((tab) => (
            <Fragment key={tab.id}>
              <FilterTabItem
                count={tab.count}
                label={tab.label}
                color={tab.countColor}
                isActive={activeTab === tab.id}
                handleClick={() => handleTabClick(tab.id)}
              />
              {tab.id === "all" && <Divider orientation="vertical" />}
            </Fragment>
          ))}
        </Box>
      </Grid>

      <Grid item xs={12} sm="auto">
        <Box className="right-wrapper">
          <StyledBtn
            variant="outlined"
            startIcon={<FilterAltIcon />}
          >
            Filter
          </StyledBtn>
          <StyledBtn startIcon={<AddIcon />} variant="contained" size="small">
            Create Ticket
          </StyledBtn>
        </Box>
      </Grid>
    </FilterTabsWrapper>
  );
};

export default FilterTabs;
