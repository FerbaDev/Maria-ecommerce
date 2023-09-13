import { Container } from "@mui/material";
import { ItemCard } from "./ItemCard";

export const ItemList = ({ products }) => {
  return (
    <div>
      <Container
        sx={{
          paddingBlock: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: "1em",
          alignItems: "center",
        }}
      >
        {products.map((product) => {
          return <ItemCard key={product.id} product={product} />;
        })}
      </Container>
    </div>
  );
};
