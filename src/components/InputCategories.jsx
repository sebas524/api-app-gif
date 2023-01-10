import React from "react";
import { useState } from "react";

export const InputCategories = ({ addCategoryHandler }) => {
  //!to track what is being typed:
  const [inputValue, setinputValue] = useState("");

  const recordInput = (e) => {
    //! input bar has an onChange={recordInput} which sets input value to w/e is being typed. this is done down here:
    setinputValue(e.target.value);
  };

  const sendInput = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    console.log(
      `this is the new input value after pressing enter: ${inputValue}`
    );

    addCategoryHandler(inputValue.trim());

    setinputValue("");
  };

  return (
    <form onSubmit={sendInput}>
      <input
        type="text"
        placeholder="search for..."
        value={inputValue}
        onChange={recordInput}
      />
    </form>
  );
};
