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
          Tienda creada por Talba Labs
        </Link>
      </h4>
    </div>
  );
};
