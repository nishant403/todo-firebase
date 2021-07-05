import React, { useContext, useEffect, useMemo } from "react";
import { DBContext } from "../utils/dbStorage";

import { Textarea } from "baseui/textarea";

export default function Editor() {
  const context = useContext(DBContext);

  const textValue = context.get("text") ? context.get("text").value : "";

  function textChange(event) {
    context.update("text", { value: event.target.value });
  }

  return (
    <>
      <div>
        <p>Live Text Editor </p>
        <Textarea
          value={textValue}
          onChange={textChange}
          placeholder="Controlled Input"
          clearOnEscape
        />
      </div>
    </>
  );
}
