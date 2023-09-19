import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { Button } from "@mui/material";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = () => {
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  let quantity = getQuantityById(id);
  const [product, setProduct] = useState(null);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc)
      .then((res) => setProduct({ ...res.data(), id: res.id }))
      .catch((error) => console.log(error));
  }, [id]);

  // AGREGAR AL CARRITO

  const onAdd = () => {
    let obj = {
      ...product,
      quantity: 1,
    };
    addToCart(obj);
  };

  return (
    <div style={{ paddingLeft: "20px" }}>
      <h1 className="bebas">Detalle</h1>

      {product && (
        <div
          style={{
            padding: "20px",
            backgroundColor: "pink",
            width: "80%",
            borderRadius: "16px",
          }}
        >
          <h2 className="montserrat" style={{ textDecoration: "underline" }}>
            {product.title}
          </h2>
          <img
            src={product.image}
            style={{ width: "200px", paddingBlock: "10px" }}
            alt=""
          />
          <p className="montserrat">Precio: ${product.unit_price}</p>
        </div>
      )}
      {quantity && <h6>Ya tienes {quantity} en el carrito</h6>}
      {product?.stock === quantity && (
        <h6>Ya tienes el maximo en el carrito</h6>
      )}
      <div style={{ display: "flex" }}>
        {isAdd ? (
          <>
            <Link to={"/cart"}>
              <Button variant="contained" color="success">
                Ir al carrito
              </Button>
            </Link>
            <Link to={"/shop"}>
              <Button variant="contained">Seguir comprando</Button>
            </Link>
          </>
        ) : (
          <>
            <Button
              onClick={(quantity) => {
                onAdd(quantity);
                setIsAdd(true);
              }}
              variant="contained"
            >
              Agregar al carrito
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
