import { Box } from "@mui/material";
import { CardMarcas } from "./CardMarcas";
import marcas from "./marcas.json";

export const Marcas = () => {
  return (
    <Box>
      <h2 className="bebas">Nuestras marcas</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ad
        fugiat iure temporibus rerum fuga modi sit dolores explicabo soluta
        assumenda, recusandae, eius minus similique aspernatur labore in. At
        magni nemo ipsum repudiandae quaerat facere amet recusandae deleniti.
        Eligendi, libero vitae!
      </p>
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
    </Box>
  );
};
