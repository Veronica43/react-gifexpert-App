import React from "react";

const GifGridItem = ({ url }) => {
  return (
    <div className="card">
      <img src={url} alt="Gifs" />
    </div>
  );
};

export default GifGridItem;
