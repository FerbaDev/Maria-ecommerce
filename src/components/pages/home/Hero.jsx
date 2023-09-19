import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Box
      sx={{
        height: "95vh",
        width: "100%",
        backgroundImage: `url("https://justaosadia.com/cdn/shop/files/JST15064.png?v=1692981099&width=800")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to={"/shop"}>
        <Button variant="contained">Ver más</Button>
      </Link>
    </Box>
  );
};
