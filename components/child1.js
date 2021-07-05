import React, { useContext } from "react";
import { DBContext } from "../utils/dbStorage";
import { useCustomCompareMemo } from "use-custom-compare";
import isEqual from "lodash/isEqual";

import { ListItem, ListItemLabel } from "baseui/list";

function Child1() {
  const context = useContext(DBContext);
  const counter = context.get("counter1");

  return useCustomCompareMemo(
    () => {
      for (let i = 0; i <= 10000000; i++) {}
      return (
        <ListItem
          endEnhancer={() => (
            <ListItemLabel>Counter 1 in child 1</ListItemLabel>
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

export default Child1;
