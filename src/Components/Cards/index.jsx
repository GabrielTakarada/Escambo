<<<<<<< HEAD
import React, { useState } from "react";
=======
import * as React from "react";
>>>>>>> d6d11574103e7ac30d2f8d5e2b46b1ae6a23d47a
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
<<<<<<< HEAD
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
=======

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="fone de ouvido"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ marginLeft: "7%" }} />
          <Button size="small">Detalhes</Button>
        </IconButton>
      </CardActions>
>>>>>>> d6d11574103e7ac30d2f8d5e2b46b1ae6a23d47a
    </Card>
  );
}
