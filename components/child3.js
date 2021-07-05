import React, { useContext, useMemo } from "react";
import { DBContext } from "../utils/dbStorage";

import { ListItem, ListItemLabel } from "baseui/list";

function Child3() {
  const context = useContext(DBContext);
  const counter = context.get("counter2");

  return useMemo(() => {
    for (let i = 0; i <= 10000000; i++) {}
    return (
      <ListItem
        endEnhancer={() => <ListItemLabel>Counter 2 in child 3</ListItemLabel>}
      >
        <ListItemLabel>{counter ? counter.value : ""}</ListItemLabel>
      </ListItem>
    );
  }, [counter]);
}

export default Child3;
