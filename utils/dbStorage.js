import firebase from "./firebase";
import React, { useState, useEffect } from "react";

const db = firebase.ref("myList");

const DBContext = React.createContext();

function DBProvider(props) {
  const [loaded, setLoaded] = useState(false);
  const [storage, setStorage] = useState({});

  useEffect(() => {
    db.once("value", function(snapshot) {
      snapshot.val() ? setStorage(snapshot.val()) : setStorage({});
      setLoaded(true);
    });

    db.on("child_added", snapshot => {
      setStorage(storage => {
        const key = snapshot.key;
        const data = snapshot.val();

        let storageCopy = Object.assign({}, storage);
        storageCopy[key] = data;

        return storageCopy;
      });
    });

    db.on("child_changed", snapshot => {
      setStorage(storage => {
        const key = snapshot.key;
        const data = snapshot.val();

        let storageCopy = Object.assign({}, storage);
        storageCopy[key] = data;

        return storageCopy;
      });
    });

    db.on("child_removed", snapshot => {
      setStorage(storage => {
        const key = snapshot.key;

        let storageCopy = Object.assign({}, storage);
        delete storageCopy[key];
        setStorage(storageCopy);
      });
    });
  }, []);

  async function set(key, data) {
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
    } else {
      console.log("key ", key, "doesn't exist");
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
