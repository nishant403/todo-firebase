import React, { useContext } from "react";
import { DBContext } from "../utils/dbStorage";
import { useCustomCompareMemo } from "use-custom-compare";
import isEqual from "lodash/isEqual";

import { ListItem,ListItemLabel } from "baseui/list";

function Child2() {
  const context = useContext(DBContext);
  const counter = context.get("counter2");

  return useCustomCompareMemo(
    () => {
      for (let i = 0; i <= 10000000; i++) {}
      return (
        <ListItem
          endEnhancer={() => (
            <ListItemLabel>Counter 2 in child 2</ListItemLabel>
          )}
        >
          <ListItemLabel>{counter ? counter.value : ""}</ListItemLabel>
        </ListItem>
      );
    },
    [counter],
    (prevDeps, nextDeps) => {
      return isEqual(prevDeps, nextDeps);
    }
  );
}

export default Child2;
