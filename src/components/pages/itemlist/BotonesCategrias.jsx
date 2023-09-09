import Box from "@mui/material/Box";
import { menuMarcas } from "../../../router/menuMarcas";
import { Link } from "react-router-dom";

export const BotonesCategorias = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        {menuMarcas.map(({ id, path, title }) => {
          <Link key={id} to={path}>
            {title}
          </Link>;
        })}
      </Box>
    </>
  );
};
