import React from "react";
import { useState, useEffect } from "react";
import { addDoc } from "firebase/firestore";
import { usersCollectionReference } from "../../../utils/firebase-config";

const Create = () => {
  const [newUser, setNewUser] = useState({ name: "", age: "" });
  const createHandler = (e) => {
    e.preventDefault();
    const createrFunc = async () => {
      await addDoc(usersCollectionReference, { ...newUser });
    };
    createrFunc();
    setNewUser({ name: "", age: "" });
  };

  return (
    <div>
      <h2>Creating a new user in the firestore</h2>
      <label htmlFor="">Name </label>
      <input
        placeholder="Name..."
        type="text"
        value={newUser.name}
        onChange={(e) => {
          setNewUser({ ...newUser, name: e.target.value });
        }}
      />
      <label htmlFor=""> Age </label>
      <input
        placeholder="Age..."
        type="text"
        value={newUser.age}
        onChange={(e) => {
          setNewUser({ ...newUser, age: Number(e.target.value) });
        }}
      />
      <button type="submit" onClick={createHandler}>
        Submit
      </button>
    </div>
  );
};

export default Create;
