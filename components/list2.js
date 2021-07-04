import React, { useContext } from "react";
import { DBContext } from "../utils/dbStorage";
import { useCustomCompareMemo } from "use-custom-compare";
import isEqual from "lodash/isEqual";

function List2() {
  const context = useContext(DBContext);
  const counter = context.get("counter2");

  return useCustomCompareMemo(
    () => {
      for (let i = 0; i <= 10000000; i++) {}
      return (
        <div>
          <h2>List2</h2>
          <p>{counter ? counter.value : ""}</p>
        </div>
      );
    },
    [counter],
    (prevDeps, nextDeps) => {
      return isEqual(prevDeps, nextDeps);
    }
  );
}

export default List2;
