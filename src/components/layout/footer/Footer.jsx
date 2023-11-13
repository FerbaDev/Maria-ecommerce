import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ReactWhatsapp from "react-whatsapp";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
   <>
    <Box sx={{minHeight: "300px", backgroundColor: "#1c1c1c", color: "whitesmoke"}}>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h5" component="h2" align="center">
          Nos encontrás en:
        </Typography>
        <Box sx={{display: "flex", flexDirection: "row", gap: "1.5em"}} p={2}>

        <ReactWhatsapp
        number="549-3571-52-1084"
        message="Hola María! Me gustaría hacer una consulta."
        element="div"
        className="cursor-manito"
      >
        <WhatsAppIcon style={{fontSize: "3em"}}/>
        
       
      </ReactWhatsapp>
      <InstagramIcon style={{fontSize: "3em"}}/>
        <FacebookIcon style={{fontSize: "3em"}}/>
        </Box>
      </Box>
      
    </Box>
    <Box sx={{backgroundColor: "black", width: "100%", display: "flex", justifyContent: "end", p: 2, color: "whitesmoke"}}>

    <p style={{ fontFamily: "monospace" }}>
      Tienda creada por
      <Link to={"https://talba-labs.vercel.app/"} className="talba">
        <span style={{ fontFamily: "monospace", }}> Talba Labs</span>
      </Link>
    </p>
    </Box>
   </>
  );
};
