import { Component, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Form from "../components/form";
import List from "../components/list";

export class index extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>To do List</h1>
        <p>Add items below</p>
          <Form />
          <List />
      </div>
    );
  }
}

export default index;
