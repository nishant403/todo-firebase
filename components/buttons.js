import React, { useContext, useEffect, useMemo } from "react";
import { DBContext } from "../utils/dbStorage";

import styles from "../styles/Home.module.css";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";

export default function Buttons() {
  const context = useContext(DBContext);

  function set1() {
    context.set("counter1", { value: 0 });
  }

  function set2() {
    context.set("counter2", { value: 0 });
  }

  function add1() {
    context.update("counter1", { value: context.get("counter1").value + 1 });
  }

  function add2() {
    context.update("counter2", { value: context.get("counter2").value + 1 });
  }

  function rem1() {
    context.remove("counter1");
  }

  function rem2() {
    context.remove("counter2");
  }

  function custom1() {
    context.update("counter1", { value2: "20" });
  }

  function custom2() {
    context.update("counter2", { value2: "20" });
  }

  return (
    <>
      <div className={styles.grid}>
        <ButtonGroup>
          <Button onClick={set1}>Set Counter 1</Button>
          <Button onClick={set2}>Set Counter 2</Button>
          <Button onClick={add1}>Increment Counter 1</Button>
          <Button onClick={add2}>Increment Counter 2</Button>
          <Button onClick={rem1}>Remove Counter 1</Button>
          <Button onClick={rem2}>Remove Counter 2</Button>
          <Button onClick={custom1}>Add custom field in Counter 1</Button>
          <Button onClick={custom2}>Add custom field in Counter 2</Button>
        </ButtonGroup>
      </div>
    </>
  );
}
