import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ReactWhatsapp from "react-whatsapp";

export const Hero = () => {
  return (
    <Box
      sx={{
        height: "95vh",
        width: "100%",
        backgroundImage: `url("https://justaosadia.com/cdn/shop/files/JST15064.png?v=1692981099&width=800")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "3.5em",
          textAlign: "center",
          backgroundColor: "rgba(135, 4, 71, 0.3)",
          width: "100%",
        }}
        className="bebas"
      >
        Con el confort en mente
      </h1>
      <Link to={"/shop"}>
        <Button variant="contained" color="secondary">
          Ver tienda
        </Button>
      </Link>
      <ReactWhatsapp
        number="549-3571-57-3266"
        message="Hello World!!!"
        element="button"
        className="whatsapp"
      >
        <WhatsAppIcon />
        Whatsapp
      </ReactWhatsapp>
    </Box>
  );
};
