import React, { useContext, useState, useMemo } from "react";
import { DBContext } from "../utils/dbStorage";

function List() {
  const context = useContext(DBContext);

  const counter = context.get("counter") ? context.get("counter").value : "";

  return useMemo(() => {
    for (let i = 0; i <= 10000000; i++) {}

    return (
      <div>
        <h2>List</h2>
        <p>{counter}</p>
      </div>
    );
  }, [counter]);
}

export default List;
