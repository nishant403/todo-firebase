import React, { useContext, useMemo } from "react";
import { useDBHook } from "../utils/dbHook";

import { ListItem, ListItemLabel } from "baseui/list";

function Child1() {
  const [counter] = useDBHook("counter1");

  return (
    <ListItem
      endEnhancer={() => <ListItemLabel>Counter 1 in child 1</ListItemLabel>}
    >
      <ListItemLabel>{counter ? counter.value : ""}</ListItemLabel>
    </ListItem>
  );
}

export default Child1;
