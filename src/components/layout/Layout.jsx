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
          paddingTop: "30px",
          width: "100%",
          minHeight: "90vh",

          background: "#F5D1E0",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};
