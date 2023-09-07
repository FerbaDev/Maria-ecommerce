import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          py: 4,
          width: "100%",
          minHeight: "90vh",
          px: 2,
          background:
            "linear-gradient(190deg, rgba(221,201,233,1) 8%, rgba(226,203,215,1) 38%, rgba(228,231,233,1) 86%);",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};
