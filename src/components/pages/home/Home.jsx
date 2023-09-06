import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Carrusel } from "./Carousel";
import { Trayectoria } from "./trayectoria/Trayectoria";

const Home = () => {
  return (
    <div>
      <Container>
        <h1>Bienvenidas!</h1>
      </Container>
      <Carrusel />
      <Trayectoria />
      <Link to={"/shop"}>
        <Button variant="contained">Ir a la tienda</Button>
      </Link>
    </div>
  );
};

export default Home;
