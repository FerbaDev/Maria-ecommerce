import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      style={{
        minHeight: "100px",
        backgroundColor: "#C43539",
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
      }}
    >
      <h4 style={{ padding: "10px" }}>
        <Link to={"https://talba-labs.vercel.app/"}>
          <Typography sx={{ fontFamily: "monospace" }}>
            Tienda creada por Talba Labs
          </Typography>
        </Link>
      </h4>
    </div>
  );
};
