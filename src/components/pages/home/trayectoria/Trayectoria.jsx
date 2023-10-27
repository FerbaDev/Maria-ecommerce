import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Trayectoria = () => {
  return (
    <Box
      sx={{
        paddingInline: "20px",
        paddingBlock: "50px",
        backgroundColor: "#F2B0CF",
      }}
    >
      <Card sx={{ maxWidth: "100%", display: "flex", flexWrap: "wrap" }}>
        <CardMedia
          sx={{ height: "250px", width: { xs: "100%", lg: "250px" } }}
          image="https://firebasestorage.googleapis.com/v0/b/maria-shoes-app.appspot.com/o/trayectoria.jpeg?alt=media&token=b24182fe-3439-403e-9405-02cef044b243&_gl=1*1ijeg1d*_ga*ODUyNzA4NDA5LjE2ODgwMDA1NzM.*_ga_CW55HF8NVT*MTY5Nzc3NTIzOC42NS4xLjE2OTc3NzY0MjguMTQuMC4w"
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
            paragraph
          >
            En María, nuestra historia se entreteje con la pasión por los
            zapatos y un compromiso inquebrantable con la calidad. Hace más de
            dos décadas, abrimos nuestras puertas para compartir esta pasión con
            mujeres como vos.
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
            María, la fundadora y corazón de nuestra tienda, proviene de una
            familia con un legado en la moda y los zapatos. Desde temprana edad,
            su vida estuvo inmersa en esta industria, y su amor por los zapatos
            es innegable.
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
            Lo que realmente la distingue es su conexión única con cada una de
            nuestras queridas clientas. A lo largo de los años, ha formado
            amistades, conociendo sus gustos y necesidades, y creando una
            experiencia de compra personalizada que va más allá de un simple par
            de zapatos.
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
            Nuestra relación con los proveedores es tan sólida como nuestros
            zapatos. Trabajamos con personas que, como nosotros, valoran la
            calidad y la atención al detalle. Conocemos a cada proveedor
            personalmente, lo que nos permite seleccionar materiales de primera
            calidad y garantizar costuras precisas y terminaciones impecables.
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
            Gracias por confiar en nosotros durante estos 21 años. Esperamos
            continuar caminando a tu lado, brindándote calidad, estilo y, sobre
            todo, una experiencia que valga la pena.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
