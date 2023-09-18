import { Box } from "@mui/material";
import { CardMarcas } from "./CardMarcas";
import marcas from "./marcas.json";

export const Marcas = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ paddingBottom: "30px" }}>
        <h2 className="bebas titulos-medios">Nuestras marcas</h2>
        <p className="montserrat">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ad
          fugiat iure temporibus rerum fuga modi sit dolores explicabo soluta
          assumenda, recusandae, eius minus similique aspernatur labore in. At
          magni nemo ipsum repudiandae quaerat facere amet recusandae deleniti.
          Eligendi, libero vitae!
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1em",
          flexDirection: { xs: "column", sm: "column", md: "row" },

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
