import { Paper, Button } from "@mui/material";

export const Item = ({ item }) => {
  return (
    <Paper>
      <img src={item.image} alt="" style={{ width: "100%", height: "auto" }} />
      <h2>{item.name}</h2>

      <Button className="CheckButton">Ver más</Button>
    </Paper>
  );
};
