import React, { useEffect, useState } from "react";
import ToDo from "./todo";
import utils from "../utils/dbStorage";

function List() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const items = utils.getDBAll();
    items.on("value", snapshot => {

      let items = snapshot.val();
      let newList = [];

      for (let item in items) {
        if (item != "counter") {
          newList.push(items[item]);
        }
      }

      setToDoList(newList);

    });
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
