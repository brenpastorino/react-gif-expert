import { useState } from "react";

export const AddCategory = (
  // { setCategories} -> forma 1
  //forma 2:
  { onNewCategory }
) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    //setCategories((categories) => [...categories, inputValue]); -> forma 1
    //forma 2:
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  const onInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  //Esta función OnInputChange sirve para que me tome las letras que voy escribiendo en el input

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      {/* puede ir el (event) => onSubmit(event) o puede ir como hice con onChange={onInputChange} y 
    no poner la parte del event */}
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        //El onchange es "obligatorio" porque si solo le pasamos el value es como que nos toma el input
        //como algo read only y no nos deja escrbir, asi que entiendo que siempre vamos a tener que poner
        //el onchange con la función onInputChange
      />
    </form>
  );
};
