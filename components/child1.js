import React, { useContext, useMemo } from "react";
import { DBContext } from "../utils/dbStorage";

import { ListItem, ListItemLabel } from "baseui/list";

function Child1() {
  const context = useContext(DBContext);
  const counter = context.get("counter1");

  return useMemo(() => {
    // for (let i = 0; i <= 10000000; i++) {}
    return (
      <ListItem
        endEnhancer={() => <ListItemLabel>Counter 1 in child 1</ListItemLabel>}
      >
        <ListItemLabel>{counter ? counter.value : ""}</ListItemLabel>
      </ListItem>
    );
  }, [counter]);
}

export default Child1;
