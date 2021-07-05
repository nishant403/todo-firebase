import React, { useContext, useMemo } from "react";
import { DBContext } from "../utils/dbStorage";

import { Textarea } from "baseui/textarea";

export default function Editor() {
  const context = useContext(DBContext);

  const textValue = context.get("text");

  function textChange(event) {
    context.update("text", { value: event.target.value });
  }

  return useMemo(() => {
    return (
      <>
        <div>
          <p>Live Text Editor </p>
          <Textarea
            value={textValue ? textValue.value : ""}
            onChange={textChange}
            placeholder="Controlled Input"
            clearOnEscape
          />
        </div>
      </>
    );
  }, [textValue]);
}
