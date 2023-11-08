import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ReactWhatsapp from "react-whatsapp";
import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <div className="footer">
      <ReactWhatsapp
        number="549-3571-52-1084"
        message="Hola María! Me gustaría hacer una consulta."
        element="div"
        style={{ display: "flex", gap: "5px" }}
        className="cursor-manito"
      >
        <WhatsAppIcon />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <p>¡Hola María!</p>
        </Box>
      </ReactWhatsapp>
      <p style={{ fontFamily: "monospace" }}>
        Tienda creada por
        <Link to={"https://talba-labs.vercel.app/"} className="talba">
          <span style={{ fontFamily: "monospace" }}> Talba Labs</span>
        </Link>
      </p>
    </div>
  );
};
