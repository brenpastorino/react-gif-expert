import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  //Importante: no se puede colocar un hook como use state dentro de un if
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  //forma 2:
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //setCategories={setCategories} -> forma 1 de agregar una nueva categoria
        //forma 2:
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
