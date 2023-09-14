import { Box } from "@mui/material";
import { CardMarcas } from "./CardMarcas";
import marcas from "./marcas.json";

export const Marcas = () => {
  return (
    <div>
      <h2 className="bebas">Nuestras marcas</h2>
      <Box
        sx={{
          display: "flex",
          gap: "1em",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        {marcas.map((marca) => (
          <CardMarcas key={marca.id} {...marca} />
        ))}
      </Box>
    </div>
  );
};
