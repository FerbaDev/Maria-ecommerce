import { Box } from "@mui/material";

import { Trayectoria } from "./trayectoria/Trayectoria";
import { Marcas } from "./marcas/Marcas";
import { SeccionCatalogo } from "./seccionCatalogo/SeccionCatalogo";
import { Hero } from "./Hero";
import { Banner } from "./Banner";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Banner />
      <Trayectoria />
      <Marcas />
      <SeccionCatalogo />
    </Box>
  );
};

export default Home;
