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

      {/* <Carrusel /> */}
      {/* <SeccionCatalogo /> */}
      <Trayectoria />
      <Marcas />
      <SeccionCatalogo />
      <Carrusel />
    </Box>
  );
};

export default Home;
