import Carousel from "react-material-ui-carousel";
import { Item } from "./Item";
import items from "./slides.json";

export const Carrusel = () => {
  return (
    <Carousel>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
};
