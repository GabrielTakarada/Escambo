import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import fone from "../../assets/fone.png";
import {
  cardStyle,
  imageStyle,
  cardMediaStyle,
  buttonContainerStyle,
} from "./style";

export default function MediaCard() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const favoriteIconStyle = {
    color: isFavorite ? "red" : "inherit",
  };

  return (
    <Card sx={cardStyle}>
      <img src={fone} alt="Fone" style={imageStyle}></img>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Airpods 2
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estes são os fones de ouvido ultrablaster de ultima geração da marca
          JBL em perfeito estado
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" onClick={toggleFavorite}>
          <FavoriteIcon style={favoriteIconStyle} />
        </IconButton>
        <IconButton style={buttonContainerStyle}>
          <Link to="/profile">
            <Button size="small">Detalhes</Button>
          </Link>
        </IconButton>
      </CardActions>
      <CardMedia sx={cardMediaStyle} title="fone de ouvido" />
    </Card>
  );
}
