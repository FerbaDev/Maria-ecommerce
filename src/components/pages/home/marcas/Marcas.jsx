import { Box } from "@mui/material";
import { CardMarcas } from "./CardMarcas";
import marcas from "./marcas.json";

export const Marcas = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ paddingBottom: "30px" }}>
        <h2 className="bebas titulos-medios">Nuestras marcas</h2>
        <p className="montserrat" style={{ fontWeight: "bold" }}>
          Descubre la elegancia y calidad de Gravagna, la innovación de Justa
          Osadía y el estilo único de Troncoso. Tres icónicas marcas de zapatos
          de mujer, orgullosamente fabricadas en Argentina.
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1em",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        {marcas.map((marca) => (
          <CardMarcas key={marca.id} {...marca} />
        ))}
      </Box>
    </Box>
  );
};
