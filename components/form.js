import React, { useContext } from "react";
import { DBContext } from "../utils/dbStorage";
import styles from "../styles/Home.module.css";

export default function Form() {
  const context = useContext(DBContext);

  function set() {
    context.set("counter", { value: 0 });
  }

  function set2() {
    context.set("counter2", { value: 0 });
  }

  function add() {
    const currentVal = context.get("counter").value;
    context.update("counter", { value: currentVal + 1 });
  }

  function add2() {
    const currentVal = context.get("counter2").value;
    context.update("counter2", { value: currentVal + 1 });
  }

  function rem() {
    context.remove("counter");
  }

  function rem2() {
    context.remove("counter2");
  }

  function custom() {
    context.update("counter",{value2 : "20"});
  }

  return (
    <>
      <h2>Form</h2>

      <div className={styles.grid}>
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
