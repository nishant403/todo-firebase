import React, { useContext, useEffect, useMemo } from "react";
import { DBContext } from "../utils/dbStorage";
import styles from "../styles/Home.module.css";

export default function Form() {
  const context = useContext(DBContext);

  const textValue = context.get("text") ? context.get("text").value : "";

  function set() {
    context.set("counter", { value: 0 });
  }

  function set2() {
    context.set("counter2", { value: 0 });
  }

  function add() {
    context.update("counter", { value: context.get("counter").value + 1 });
  }

  function add2() {
    context.update("counter2", { value: context.get("counter2").value + 1 });
  }

  function rem() {
    context.remove("counter");
  }

  function rem2() {
    context.remove("counter2");
  }

  function custom() {
    context.update("counter", { value2: "20" });
  }

  function textChange(event) {
    context.update("text", { value: event.target.value });
  }

  return (
    <>
      <h2>Form</h2>
      <div className={styles.grid}>
        <p>Check realtime text editor </p>
        <textarea
          name=""
          id="text"
          value={textValue}
          onChange={textChange}
          cols="100"
          rows="5"
        ></textarea>
        <button onClick={set}>Set Counter</button>
        <button onClick={set2}>Set Counter2</button>
        <button onClick={add}>Add +1 to Counter</button>
        <button onClick={add2}>Add +1 to Counter2</button>
        <button onClick={rem}>Remove Counter</button>
        <button onClick={rem2}>Remove Counter2</button>
        <button onClick={custom}>Add custom field in counter</button>
      </div>
    </>
  );
}
