import React, { useState, useEffect } from "react";
import utils from "../utils/dbStorage";

function Form() {
  const [title, setTitle] = useState("");

  const handleOnChange = e => {
    setTitle(e.target.value);
  };

  const addToDo = () => {
    const newToDo = {
      title: title,
      completed: false
    };

    utils.get("counter").then((item) => {
      const index = item["value"];
      console.log(index);
      utils.set(index.toString(), newToDo).then(() => {
        utils.set("counter", {
          value : index + 1
        });
      });
    });
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={addToDo}>Add Todo</button>
    </div>
  );
}

export default Form;
