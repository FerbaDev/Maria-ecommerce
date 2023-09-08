import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";
import { BotonesCategorias } from "./BotonesCategrias";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");
    getDocs(refCollection)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });

        setProducts(newArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 style={{ padding: "20px" }}>Estoy en el shop</h1>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <BotonesCategorias />
      </Box>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {products.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                maxWidth: "345px",
                paddingBottom: "5px",
                borderRadius: "10px",
              }}
            >
              <img
                src={product.image}
                style={{ width: "100%", borderRadius: "10px 10px 0 0" }}
                alt={product.title}
              />
              <div style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "10px",
                    marginTop: "-10px",
                  }}
                >
                  <h4>{product.title}</h4>
                  <h4>Precio: ${product.unit_price}</h4>
                  <h4>Stock: {product.stock}</h4>
                </Box>
                <Link to={`/itemDetail/${product.id}`}>
                  <Button variant="contained" sx={{ margin: "10px" }}>
                    Ver detalle
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default ItemListContainer;
