import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Carrusel } from "./Carousel";

const Home = () => {
  return (
    <div>
      <Container>
        <h1>Maria</h1>
      </Container>
      <Carrusel />
      <Link to={"/shop"}>
        <Button variant="contained">Ir a la tienda</Button>
      </Link>
    </div>
  );
};

export default Home;
