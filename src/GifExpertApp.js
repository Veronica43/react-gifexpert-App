import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
console.log(process.env.REACT_APP_GIPHY_API_KEY);

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["GIF's"]);

  return (
    <div>
      <h1 className="titleApp"> Funny GIF's </h1>

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
