import { CardMarcas } from "./CardMarcas";
import marcas from "./marcas.json";

export const Marcas = () => {
  return (
    <div>
      <h2>Nuestras marcas</h2>
      <div>
        {marcas.map((marca) => (
          <CardMarcas key={marca.id} {...marca} />
        ))}
      </div>
    </div>
  );
};
