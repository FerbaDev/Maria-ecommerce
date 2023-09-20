import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        backgroundImage: `url("https://justaosadia.com/cdn/shop/files/JST15064.png?v=1692981099&width=800")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "3.5em",
          textAlign: "center",
          backgroundColor: "rgba(135, 4, 71, 0.3)",
          width: "100%",
        }}
        className="bebas"
      >
        Con el confort en mente
      </h1>
      <Link to={"/shop"}>
        <Button variant="contained" color="secondary">
          Ver más
        </Button>
      </Link>
    </Box>
  );
};
