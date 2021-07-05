import { useContext } from "react";
import { DBContext } from "../utils/dbStorage";

export function useDBHook(key) {
  const context = useContext(DBContext);
  const value = context.get(key);

  const onAction = function(action) {
    switch (action.type) {
      case "set":
        context.set(key, action.payload);
        break;
      case "update":
        context.update(key, action.payload);
        break;
      case "remove":
        context.remove(key);
        break;
    }
  };

  return [value, onAction];
}
