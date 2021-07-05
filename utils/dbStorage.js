import firebase from "./firebase";
import React, { useState, useEffect } from "react";
import * as updateImmute from "immutability-helper";

const db = firebase.ref("myList");

const DBContext = React.createContext();

function DBProvider(props) {
  const [storage, setStorage] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(storage);
  }, [storage]);

  useEffect(() => {
    db.once("value", function(snapshot) {
      snapshot.val() ? setStorage(snapshot.val()) : setStorage({});
      setLoaded(true);
    });
  }, []);

  function setLocal(key, data) {
    setStorage(storage => {
      const storageCopy = updateImmute(storage, { [key]: { $set: data } });
      console.log("add", storage, key, data, storageCopy);
      return storageCopy;
    });
  }

  function updateLocal(key, data) {
    setStorage(storage => {
      const storageCopy = updateImmute(storage, { [key]: { $merge: data } });
      console.log("update", storage, key, data, storageCopy);
      return storageCopy;
    });
  }

  function removeLocal(key) {
    if (storage.hasOwnProperty(key)) {
      setStorage(storage => {
        const storageCopy = updateImmute(storage, { $unset: [key] });
        console.log("remove", storage, key, storageCopy);
        return storageCopy;
      });
    }
  }

  function set(key, data) {
    setLocal(key, data);
    return db.child(key).set(data);
  }

  function update(key, data) {
    if (storage.hasOwnProperty(key) == false) {
      console.log("key", key, "doesn't exist");
      return;
    }

    updateLocal(key, data);
    return db.child(key).update(data);
  }

  function get(key) {
    if (storage.hasOwnProperty(key)) {
      return storage[key];
    } else {
      console.log("key ", key, "doesn't exist");
    }
  }

  function remove(key) {
    if (storage.hasOwnProperty(key)) {
      removeLocal(key);
      return db.child(key).remove();
    } else {
      console.log("key ", key, "doesn't exist");
    }
  }

  return (
    <DBContext.Provider value={{ get, set, remove, update }}>
      {props.children}
    </DBContext.Provider>
  );
}

export { DBContext, DBProvider };
