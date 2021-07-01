import React, { useEffect, useState } from "react";
import ToDo from "./todo";
import utils from "../utils/dbStorage";

function List() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {    
    const newItems = utils.getAll();

    newItems.then(item => {
      console.log(item);
    })

  }, []);

  return (
    <div>
      {toDoList.map((item, index) => (
        <ToDo todo={item} key={index} />
      ))}
    </div>
  );
}

export default List;
