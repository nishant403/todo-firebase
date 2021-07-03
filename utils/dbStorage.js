import firebase from "./firebase";
import React, { useState, useEffect } from "react";

const db = firebase.ref("myList");

const DBContext = React.createContext();

function DBProvider(props) {
  const [loaded, setLoaded] = useState(false);
  const [storage, setStorage] = useState({});

  useEffect(() => {
    db.once("value", function(snapshot) {
      setStorage(snapshot.val());
      setLoaded(true);
    });
  }, []);

  function set(key, data) {
    if (storage.hasOwnProperty(key) == true) {
      return remove(key, data).then(() => {
        let storageCopy = Object.assign({}, storage);
        storageCopy[key] = data;
        setStorage(storageCopy);

        return db.child(key).set(data);
      });
    }

    let storageCopy = Object.assign({}, storage);
    storageCopy[key] = data;
    setStorage(storageCopy);

    return db.child(key).set(data);
  }

  function update(key, data) {
    if (storage.hasOwnProperty(key) == false) {
      return set(key, data);
    }

    let storageCopy = Object.assign({}, storage);

    for (let subkey in data) {
      storageCopy[key][subkey] = data[subkey];
    }

    setStorage(storageCopy);

    return db.child(key).update(data);
  }

  function get(key) {
    if (storage.hasOwnProperty(key)) {
      return storage[key];
    }
  }

  function remove(key) {
    if (storage.hasOwnProperty(key)) {
      let storageCopy = Object.assign({}, storage);
      delete storageCopy[key];
      setStorage(storageCopy);

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
