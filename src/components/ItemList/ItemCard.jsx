import React from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={`/itemDetail/${item.id}`}>
        <Button variant="contained" size="small" sx={{ textTransform: "none" }}>
          Detalle
        </Button>
      </Link>
    </Card>
  );
};

export default ItemCard;
