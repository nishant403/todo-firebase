import styles from "../styles/Home.module.css";
import Editor from "../components/editor";
import Child1 from "../components/child1";
import Child2 from "../components/child2";
import Child3 from "../components/child3";
import Buttons from "../components/buttons";

export default function index() {
   return (
    <div className={styles.container}>
      <Editor />
      <Child1 />
      <Child2 />
      <Child3 />
      <Buttons />
    </div>
  );
}
