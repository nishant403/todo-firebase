import { Component } from "react";
import styles from "../styles/Home.module.css";
import Form from "../components/form";
import List from "../components/list";
import List2 from "../components/list2";
import List3 from "../components/list3";

export class index extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>To do List</h1>
        <p>Add items below</p>
        <Form />
        <List />
        <List2/>
        <List3/>
      </div>
    );
  }
}

export default index;
