import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Carrusel } from "./Carousel";
import { Trayectoria } from "./trayectoria/Trayectoria";
import { Marcas } from "./marcas/Marcas";
import { SeccionCatalogo } from "./seccionCatalogo/SeccionCatalogo";
import { Hero } from "./Hero";

const Home = () => {
  return (
    <Box>
      <Hero />

      {/* <Carrusel />
      <SeccionCatalogo />
      <Trayectoria />
      <Marcas />
      <Box sx={{ padding: "20px" }}>
        <Link to={"/shop"}>
          <Button variant="contained">Ir a la tienda</Button>
        </Link>
      </Box> */}
    </Box>
  );
};

export default Home;
