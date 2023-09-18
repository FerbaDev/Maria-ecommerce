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
            En María, nuestra historia se teje con hilos de pasión por los
            zapatos y un compromiso inquebrantable con la calidad. Hace más de
            dos décadas, abrimos nuestras puertas para compartir nuestra pasión
            con el mundo. María, la fundadora y alma de nuestra tienda, proviene
            de una familia con un legado en la moda y los zapatos. Desde
            temprana edad, su vida estuvo inmersa en la industria, y su amor por
            los zapatos es innegable. Lo que realmente la distingue es su
            conexión única con cada una de nuestras queridas clientas. A lo
            largo de los años, ha formado amistades, conociendo sus gustos y
            necesidades, y creando una experiencia de compra personalizada que
            va más allá de un simple par de zapatos. Nuestra relación con los
            proveedores es tan sólida como nuestros zapatos. Trabajamos con
            personas que, como nosotros, valoran la calidad y la atención al
            detalle. Conocemos a cada proveedor personalmente, lo que nos
            permite seleccionar materiales de primera calidad y garantizar
            costuras precisas y terminaciones impecables. Gracias por confiar en
            nosotros durante estos 21 años. Esperamos continuar caminando a tu
            lado, brindándote calidad, estilo y, sobre todo, una experiencia que
            valga la pena.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
