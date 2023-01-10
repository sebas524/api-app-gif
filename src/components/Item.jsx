import React from "react";

export const Item = ({ title, url }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={url} alt={title} />
    </div>
  );
};
