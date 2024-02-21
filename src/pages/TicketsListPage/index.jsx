import { useMemo, useState } from "react";
import { Box, Grid } from "@mui/material";

import { data } from "../../utils/constants";

import FilterTabs from "./FilterTabs";
import TicketList from "./TicketList";
import TicketDetails from "./TicketDetails";
import TicketDescription from "./TicketDetails/TicketDescription";
import { TicketsListContainer, TicketListWrapper, GridWrapper } from "./style";
import TicketListHeader from "./TicketList/TicketListHeader";

const TicketsListPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredData, setFilteredData] = useState(data);
  const [dataId, setDataId] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    switch (tabId) {
      case "all":
        setFilteredData(data);
        break;
      case "assigned_to_me":
        setFilteredData(data.filter((obj) => obj.assigned === "AJ"));
        break;
      case "unassigned":
        setFilteredData(data.filter((obj) => !obj.assigned));
        break;
      case "overdue":
        setFilteredData(data.filter((obj) => obj.due === "overdue"));
        break;
      case "all_open":
        setFilteredData(data.filter((obj) => obj.status === "Open"));
        break;
      default:
        return;
    }
  };

  const selectedTicketDetails = useMemo(
    () => data.find((e) => e.id === dataId),
    [dataId]
  );

  return (
    <>
      <FilterTabs activeTab={activeTab} handleTabClick={handleTabClick} />

      <TicketsListContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <TicketListWrapper>
              <TicketListHeader />
              <TicketList
                data={filteredData}
                setDataId={setDataId}
                dataId={dataId}
                activeNav={activeTab}
              />
            </TicketListWrapper>
          </Grid>
          <GridWrapper item xs={0} md={3}>
            <Box mb={2}>
              <TicketDetails data={selectedTicketDetails} />
            </Box>
            <Box>
              <TicketDescription data={selectedTicketDetails} />
            </Box>
          </GridWrapper>
        </Grid>
      </TicketsListContainer>
    </>
  );
};

export default TicketsListPage;
