import React from "react";
import { useDBHook } from "../utils/dbHook";

import { Textarea } from "baseui/textarea";

export default function Editor() {
  const [textValue, actions] = useDBHook("text");

  function textChange(event) {
    actions({ type: "update", payload: { value: event.target.value } });
  }

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
}
