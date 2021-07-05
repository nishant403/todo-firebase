import React, { useContext, useEffect, useMemo } from "react";
import { useDBHook } from "../utils/dbHook";

import styles from "../styles/Home.module.css";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";

export default function Buttons() {
  const [counter1, counter1Actions] = useDBHook("counter1");
  const [counter2, counter2Actions] = useDBHook("counter2");

  function set1() {
    counter1Actions({ type: "set", payload: { value: 0 } });
  }

  function set2() {
    counter2Actions({ type: "set", payload: { value: 0 } });
  }

  function add1() {
    counter1Actions({ type: "update", payload: { value: counter1.value + 1 } });
  }

  function add2() {
    counter2Actions({ type: "update", payload: { value: counter2.value + 1 } });
  }

  function rem1() {
    counter1Actions({ type: "remove" });
  }

  function rem2() {
    counter2Actions({ type: "remove" });
  }

  function custom1() {
    counter1Actions({ type: "update", payload: { value2: "20" } });
  }

  function custom2() {
    counter2Actions({ type: "update", payload: { value2: "20" } });
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
