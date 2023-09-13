import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Typography,
} from "@mui/material";

import { ItemList } from "./ItemList";

import { menuCategorias } from "../../../router/menuCategorias";
import { menuMarcas } from "../../../router/menuMarcas";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryName, brandName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let consulta;

    if (categoryName) {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    } else if (brandName) {
      consulta = query(itemsCollection, where("marca", "==", brandName));
    } else {
      consulta = itemsCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });

        setProducts(newArray);
      })
      .catch((err) => console.log(err));
  }, [categoryName, brandName]);

  if (products.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ paddingBlock: "20px" }}>
      <Typography variant="h3" align="center">
        Tienda
      </Typography>
      <Box>
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuCategorias.map(({ id, path, title }) => (
            <Button key={id}>
              <Link to={path}>{title}</Link>
            </Button>
          ))}
          {menuMarcas.map((marca) => (
            <Button key={marca.id}>
              <Link to={marca.path}>{marca.title}</Link>
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;
