import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Box
      sx={{
        height: { xs: "95vh", md: "100vh", lg: "100vh" },
        width: "100%",
        backgroundImage: `url("https://justaosadia.com/cdn/shop/files/JST15064.png?v=1692981099&width=800")`,
        backgroundPosition: "50% 40%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: { lg: "8px" },
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "3.5em",
          textAlign: "center",
          backgroundColor: "rgba(135, 4, 71, 0.3)",
          width: "auto",
          paddingInline: "20px",
        }}
        className="bebas"
      >
        Con el confort en mente
      </h1>
      <Link to={"/shop"}>
        <Button variant="contained" color="secondary">
          Ver tienda
        </Button>
      </Link>
    </Box>
  );
};
