import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Trayectoria = () => {
  return (
    <Box sx={{ paddingBlock: "50px", backgroundColor: "#F2B0CF" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://firebasestorage.googleapis.com/v0/b/maria-shoes-app.appspot.com/o/trayectoria.jpg?alt=media&token=40ebc04b-9806-4aff-bc9e-2b0b368ab849"
          title="Maria y Francois"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontFamily: "'Bebas Neue', sans-serif;" }}
          >
            Nuestra trayectoria
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
            A paragraph of placeholder text. We are using it here to show the
            use of the clearfix class. We are adding quite a few meaningless
            phrases here to demonstrate how the columns interact here with the
            floated image.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
