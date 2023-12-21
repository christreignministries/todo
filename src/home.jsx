import React, { useEffect, useState } from "react";
import { getAuth } from "../node_modules/firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  query,
  onSnapshot,
  collection,
  deleteDoc,
} from "../node_modules/firebase/firestore";
import firestore from "./firebase";
import "./home.css";

const home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  // console.log(user.email);

  const [userTag, setUserTag] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  useEffect(() => {
    const data = query(collection(firestore, "Todo-list"));

    getDoc(doc(firestore, "Details", user.email)).then((docSnap) => {
      if (docSnap.exists()) {
        console.log(docSnap.data().userName);
        setUserTag(docSnap.data().userName);
      } else {
        console.log("No such document!");
      }
    });
    const fetch = onSnapshot(data, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setTodos(doc.data());
        todosArray.push(doc.data().Item);
      });
      setTodos(todosArray);
    });

    getDoc;
  }, []);

  const handleSubmit = (e) => {
    setNewTodos("");
    e.preventDefault();
    try {
      const cityRef = doc(firestore, "Todo-list", `${newTodos}`);
      setDoc(cityRef, {
        Item: newTodos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (event) => {
    console.log("object", event);
    deleteDoc(doc(firestore, "Todo-list", `${event}`));
  };
  console.log(newTodos);
  return (
    <div>
      Welcome {userTag}
      <div className="to-do-list-main-background">
        <div className="sub">
          <div className="input">
            <input
              type="text"
              value={newTodos}
              className="input-search"
              placeholder="Add a new task"
              onChange={(event) => setNewTodos(event.target.value)}
            />
            <button className="add" onClick={handleSubmit}>
              Add
            </button>
          </div>
          <div className="todo-list">
            {todos.map((items, index) => (
              <div key={index}>
                <div className="items">{items}</div>
                <div className="delete" onClick={() => handleDelete(items)}>
                  Delete
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
