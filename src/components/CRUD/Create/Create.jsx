import React from "react";
import { useState, useEffect } from "react";
import { addDoc } from "firebase/firestore";
import { usersCollectionReference } from "../../../utils/firebase-config";

const Create = () => {
  const [newUser, setNewUser] = useState({ name: "", age: 0 });
  const createHandler = async (e) => {
    e.preventDefault();
    console.log(newUser);
    await addDoc(usersCollectionReference, { ...newUser });
    setNewUser({ ...newUser, name: "", age: 0 });
  };

  return (
    <div>
      <h2>Creating a new user in the firestore</h2>
      <label htmlFor="">Name </label>
      <input
        placeholder="Name..."
        type="text"
        onChange={(e) => {
          setNewUser({ ...newUser, name: e.target.value });
        }}
      />
      <label htmlFor=""> Age </label>
      <input
        placeholder="Age..."
        type="text"
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
