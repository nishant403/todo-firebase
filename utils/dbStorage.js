import firebase from "./firebase";

const db = firebase.ref("myList");

const set = (key, data) => {
  return db.child(key).set(data);
};

const update = (key, data) => {
  return db.child(key).update(data);
};

const get = async key => {
  const snapshot = await db.child(key).once("value");
  return snapshot.val();
};

const getAll = async () => {
  const snapshot = await db.once("value");
  return snapshot.val();
};

const getRef = key => {
  return db.child(key);
};

const getRefAll = () => {
  return db;
};

const remove = key => {
  return db.child(key).remove();
};

const removeAll = () => {
  return db.remove();
};

const utils = {
  set,
  update,
  get,
  getAll,
  getRef,
  getRefAll,
  remove,
  removeAll
};
export default utils;
