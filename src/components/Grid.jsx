import React from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { Item } from "./Item";

export const Grid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>category</h3>
      {isLoading && <h2>LOADING...</h2>}
      <div className="card-grid">
        {images.map((image) => {
          return <Item key={image.id} {...image}></Item>;
        })}
      </div>
    </>
  );
};
