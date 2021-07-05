import firebase from "./firebase";
import React, { useState, useEffect } from "react";
import * as updateImmute from "immutability-helper";

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

        const storageCopy = updateImmute(storage, { [key] : { $set: data } });
        // console.log("add", storage, key, data, storageCopy);
        return storageCopy;
      });
    });

    db.on("child_changed", snapshot => {
      setStorage(storage => {
        const key = snapshot.key;
        const data = snapshot.val();
        const storageCopy = updateImmute(storage, { [key] : { $set: data } });
        // console.log("update", storage, key, data, storageCopy);
        return storageCopy;
      });
    });

    db.on("child_removed", snapshot => {
      setStorage(storage => {
        const key = snapshot.key;
        const storageCopy = updateImmute(storage, { $unset: [key] });
        // console.log("remove", storage, key, storageCopy);
        return storageCopy;
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
