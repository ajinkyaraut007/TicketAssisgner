import { useEffect, useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
} from "@mui/material";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Grid, Typography } from "@mui/material";
import NameAvatar from "../../../Components/NameAvatar";
import Chip from "../../../Components/Chip";
import { TextLabel, TextValue } from "../../../Components/Typography";
import StatusIcon from "../../../Components/StatusIcon";
import {
  FilteredTableCell,
  FilteredTableRow,
  FlexBox,
  TicketHeadings,
} from "./styles";
import TicketDetails from "../TicketDetails";
import TicketDescription from "../TicketDetails/TicketDescription";

function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
}

const TicketList = ({ data, setDataId, dataId, activeNav }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setPage(0);
  }, [activeNav]);

  function handleTableRowClick(id) {
    setDataId(id);
  }
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <FilteredTableRow
              key={row.id}
              onClick={() => handleTableRowClick(row.id)}
              hover
            >
              <TableCell>
                <Grid container>
                  <Grid item xs={12}>
                    <FlexBox>
                      <Box className="filteredDisplay">
                        <StatusIcon data={row} />
                      </Box>
                      <Box flex={1}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Grid
                              container
                              justifyContent="space-between"
                              spacing={1}
                            >
                              <Grid item>
                                <FlexBox className="alignedFlexBox">
                                  <Box className="filteredDisplaySM">
                                    <StatusIcon data={row} />
                                  </Box>
                                  <TicketHeadings>
                                    {row.issue_number}
                                  </TicketHeadings>
                                  <TicketHeadings>
                                    {row.issue_name}
                                  </TicketHeadings>
                                </FlexBox>
                              </Grid>
                              <Grid item xs={12} sm="auto">
                                <FlexBox className="alignedFlexBox">
                                  <Chip
                                    label="Athenian Phoenix"
                                    variant="ternary"
                                  />
                                  <Chip
                                    label="Equipment Failure"
                                    variant="secondary"
                                  />
                                </FlexBox>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={10} className="filteredDisplay">
                            <FlexBox className="alignedFlexBox">
                              <NameAvatar label="SG" size="small" />
                              <TextValue className="TicketComment">
                                That’s not good. The cargo manifest is crucial
                                document for us. Are you sure you’ve checked all
                                the usual places...
                              </TextValue>
                            </FlexBox>
                          </Grid>
                        </Grid>
                      </Box>
                    </FlexBox>
                  </Grid>
                  <Grid className="filteredDisplaySM" item xs={12} mt={2}>
                    <Grid container>
                      <Grid item xs={4}>
                        <TextLabel>Tasks</TextLabel>
                        <TextValue>{row.task}</TextValue>
                      </Grid>
                      <Grid item xs={4}>
                        <TextLabel>Resolver</TextLabel>
                        <TextValue>{row.resolver}</TextValue>
                      </Grid>
                      <Grid item xs={4}>
                        <TextLabel>Assigned</TextLabel>
                        <NameAvatar label="SG" />
                      </Grid>
                      <Grid item xs={4}>
                        <TextLabel>Due</TextLabel>
                        <TextValue>{row.due}</TextValue>
                      </Grid>
                      <Grid item xs={4}>
                        <TextLabel>Updated On</TextLabel>
                        <TextValue>{row.updated_on}</TextValue>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </TableCell>

              <FilteredTableCell>
                <TextLabel>Tasks</TextLabel>
                <TextValue>{row.task}</TextValue>
              </FilteredTableCell>

              <FilteredTableCell>
                <TextLabel>Resolver</TextLabel>

                <TextValue>{row.resolver}</TextValue>
              </FilteredTableCell>

              <FilteredTableCell>
                <TextLabel>Assigned</TextLabel>

                <NameAvatar label="SG" />
              </FilteredTableCell>

              <FilteredTableCell>
                <TextLabel>Due</TextLabel>

                <TextValue>{row.due}</TextValue>
              </FilteredTableCell>

              <FilteredTableCell>
                <TextLabel className="updatesTag">Updated On</TextLabel>

                {row.updated_on}
              </FilteredTableCell>

              {dataId == row.id ? (
                <Grid
                  className="filteredDisplaySM"
                  container
                  spacing={1}
                  sx={{ backgroundColor: "#f2f2f2" }}
                >
                  <Grid item xs={12}>
                    <TicketDetails data={row} />
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <TicketDescription data={row} />
                    <Divider />
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
            </FilteredTableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default TicketList;
