import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Cart = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div>
      <h1 className="bebas" style={{ paddingLeft: "20px" }}>
        Carrito de compras
      </h1>
      <Box
        sx={{
          backgroundColor: "#F2B0CF",
          paddingLeft: "20px",
          paddingBlock: "20px",
        }}
      >
        {cart.map((product) => {
          return (
            <div
              key={product.id}
              style={{ width: "200px", border: "2px solid red" }}
            >
              <img
                src={product.image}
                alt=""
                style={{ height: "100px", width: "auto" }}
              />
              <h6>{product.title}</h6>
              <h6>Cantidad: {product.quantity}</h6>
              <button onClick={() => deleteById(product.id)}>Eliminar</button>
            </div>
          );
        })}
      </Box>
      {cart.length > 0 && (
        <div style={{ paddingLeft: "20px" }}>
          <button onClick={clearCart}>Limpiar carrito</button>
          <h3>El total a pagar es ${total}</h3>
        </div>
      )}

      {cart.length == 0 && (
        <div style={{ paddingLeft: "20px" }}>
          <h3>El carrito está vacío</h3>
          <Link to={"/shop"}>
            <Button variant="contained">Ir a la tienda</Button>
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <Link
          to="/checkout"
          style={{ color: "steelblue", paddingLeft: "20px" }}
        >
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
