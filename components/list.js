import React, { useContext } from "react";
import { DBContext } from "../utils/dbStorage";
import { useCustomCompareMemo } from "use-custom-compare";
import isEqual from "lodash/isEqual";

function List() {
  const context = useContext(DBContext);
  const counter = context.get("counter");

  return useCustomCompareMemo(
    () => {
      for (let i = 0; i <= 10000000; i++) {}
      return (
        <div>
          <h2>List3</h2>
          <p>{counter ? counter.value : ""}</p>
        </div>
      );
    },
    [counter],
    (prevDeps, nextDeps) => {
      isEqual(prevDeps, nextDeps);
    }
  );
}

export default List;
