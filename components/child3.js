import React, { useContext, useMemo } from "react";
import { useDBHook } from "../utils/dbHook";

import { ListItem, ListItemLabel } from "baseui/list";

function Child3() {
  const [counter] = useDBHook("counter2");

  return (
    <ListItem
      endEnhancer={() => <ListItemLabel>Counter 2 in child 3</ListItemLabel>}
    >
      <ListItemLabel>{counter ? counter.value : ""}</ListItemLabel>
    </ListItem>
  );
}

export default Child3;
