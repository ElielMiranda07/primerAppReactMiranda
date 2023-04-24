import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const ItemDetail = ({ product }) => {
  return (
    <div style={{ margin: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <img
            src={product.img}
            alt=""
            style={{
              height: "250px",
            }}
          />
        </div>

        <div>
          <h3>
            <span>Nombre:</span> {product.title}
          </h3>
          <h3>
            <span>Descripcion:</span> {product.description}
          </h3>
          <h3>
            <span>Precio:</span> ${product.price}.-
          </h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <Button variant="contained">Volver</Button>
        </Link>
      </div>
    </div>
  );
};
