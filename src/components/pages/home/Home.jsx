import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Carrusel } from "./Carousel";
import { Trayectoria } from "./trayectoria/Trayectoria";
import { Marcas } from "./marcas/Marcas";

const Home = () => {
  return (
    <Box>
      <Container>
        <h1 className="bebas" style={{ fontSize: "50px" }}>
          Bienvenidas!
        </h1>
      </Container>
      <Carrusel />
      <Trayectoria />
      <Marcas />
      <Box sx={{ padding: "20px" }}>
        <Link to={"/shop"}>
          <Button variant="contained">Ir a la tienda</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
