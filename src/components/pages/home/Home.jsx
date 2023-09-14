import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Carrusel } from "./Carousel";
import { Trayectoria } from "./trayectoria/Trayectoria";
import { Marcas } from "./marcas/Marcas";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#F5D1E0" }}>
      <Container>
        <h1 className="bebas">Bienvenidas!</h1>
      </Container>
      <Carrusel />
      <Trayectoria />
      <Marcas />
      <Link to={"/shop"}>
        <Button variant="contained">Ir a la tienda</Button>
      </Link>
    </Box>
  );
};

export default Home;
