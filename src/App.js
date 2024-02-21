import TicketsListPage from "./pages/TicketsListPage";
import Layout from "./Components/Layout";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#052E2B",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <TicketsListPage />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
