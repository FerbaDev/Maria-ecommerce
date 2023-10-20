import { Box } from "@mui/material";

export const Banner = () => {
  return (
    <Box
      sx={{
        height: { xs: "200px", lg: "300px" },
        backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/maria-shoes-app.appspot.com/o/pink-324175_1280.jpg?alt=media&token=c0d2df93-f742-467b-be86-7541497c411b")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        className="bebas"
        sx={{ fontSize: { xs: "40px", md: "50px", lg: "65px" } }}
      >
        Calidad que se siente bien
      </Box>
    </Box>
  );
};
