import { Box } from "@mui/material";

export const Banner = () => {
  return (
    <Box
      sx={{
        height: "200px",
        backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/maria-shoes-app.appspot.com/o/pink-324175_1280.jpg?alt=media&token=c0d2df93-f742-467b-be86-7541497c411b")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <h2 className="bebas">Calidad que se siente bien</h2>
    </Box>
  );
};
