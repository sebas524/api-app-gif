import React from "react";
import { useState } from "react";
import { Grid } from "./components/Grid";
import { InputCategories } from "./components/InputCategories";

const App = () => {
  const [categories, setCategories] = useState(["dragon ball"]);

  const addCategoryHandler = (newInput) => {
    if (categories.includes(newInput)) return;
    setCategories((prevCat) => {
      return [...prevCat, newInput];
    });
  };

  return (
    <div>
      <h1>gif app</h1>
      <InputCategories
        addCategoryHandler={addCategoryHandler}
      ></InputCategories>

      {categories.map((category) => {
        return <Grid key={category} category={category}></Grid>;
      })}
    </div>
  );
};

export default App;
