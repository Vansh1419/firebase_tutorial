import React from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { database } from "../../../utils/firebase-config";
const Delete = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionReference = collection(database, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionReference);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  console.log(users);

  const deleteHandler = async (id) => {
    const documentInstance = doc(database, "users", id);
    await deleteDoc(documentInstance);
  };
  return (
    <div>
      <h2>Deleting User in the firestore</h2>
      {users[0] ? (
        users.map((user) => (
          <pre key={user.id}>
            <span>{user.name}</span>
            {"   "}
            <span>{user.age}</span>
            {"   "}
            <span>{user.id}</span>
            {"                  "}
            <button
              onClick={() => {
                deleteHandler(user.id);
              }}
            >
              Delete User
            </button>
          </pre>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Delete;
