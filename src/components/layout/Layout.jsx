import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

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
        <InstagramIcon
          sx={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            zIndex: "10",
            height: "2em",
            width: "auto",
            color: "fuchsia",
          }}
        />
      </Box>
      <Footer />
    </div>
  );
};
