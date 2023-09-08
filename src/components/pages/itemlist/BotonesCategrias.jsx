import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

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
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Gravagna</Button>
          <Button>Justa Osadía</Button>
          <Button>Troncoso</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
