import { Container } from "@mui/material";
import { ItemCard } from "./ItemCard";

export const ItemList = ({ products }) => {
  return (
    <div>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {products.map((product) => {
          return <ItemCard key={product.id} product={product} />;
        })}
      </Container>
    </div>
  );
};
