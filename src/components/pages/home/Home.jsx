import { Box } from "@mui/material";

import { Carrusel } from "./Carousel";
import { Trayectoria } from "./trayectoria/Trayectoria";
import { Marcas } from "./marcas/Marcas";
import { SeccionCatalogo } from "./seccionCatalogo/SeccionCatalogo";
import { Hero } from "./Hero";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Trayectoria />
      <Marcas />
      <SeccionCatalogo />
      <Carrusel />
    </Box>
  );
};

export default Home;
