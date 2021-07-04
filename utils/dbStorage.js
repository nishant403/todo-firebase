import firebase from "./firebase";
import React, { useState, useEffect } from "react";

const db = firebase.ref("myList");

const DBContext = React.createContext();

function DBProvider(props) {
  const [loaded, setLoaded] = useState(false);
  const [storage, setStorage] = useState({});

  useEffect(() => {
    db.on("value", function(snapshot) {
      snapshot.val() ? setStorage(snapshot.val()) : setStorage({});
      setLoaded(true);
    });
  }, []);

  async function set(key, data) {
    if (storage.hasOwnProperty(key) == true) {
      return remove(key, data).then(() => {
        return db.child(key).set(data);
      });
    }

    return db.child(key).set(data);
  }

  async function update(key, data) {
    if (storage.hasOwnProperty(key) == false) {
      return set(key, data);
    }

    return db.child(key).update(data);
  }

  function get(key) {
    if (storage.hasOwnProperty(key)) {
      return storage[key];
    }
  }

  async function remove(key) {
    if (storage.hasOwnProperty(key)) {
      return db.child(key).remove();
    }
  }

  return (
    <DBContext.Provider value={{ get, set, remove, update }}>
      {loaded ? props.children : <p>Loading</p>}
    </DBContext.Provider>
  );
}

export { DBContext, DBProvider };
