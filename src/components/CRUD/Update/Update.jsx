import { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { database } from "../../../utils/firebase-config";
const Update = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionReference = collection(database, "users");
  const updateHandlerIncrease = async (id, age) => {
    const documentInstance = doc(database, "users", id);
    const updatedInformation = { age: age + 1 };
    await updateDoc(documentInstance, updatedInformation);
  };
  const updateHandlerDecrease = async (id, age) => {
    const documentInstance = doc(database, "users", id);
    const updatedInformation = { age: age - 1 };
    await updateDoc(documentInstance, updatedInformation);
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionReference);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <div>
      <h2>Getting users means reading data from firestore</h2>
      {users[0] ? (
        users.map((user) => (
          <pre key={user.id}>
            <span>{user.name}</span>
            {"   "}
            <span>{user.age}</span>
            {"          "}
            <button
              onClick={() => {
                updateHandlerIncrease(user.id, user.age);
              }}
            >
              Increase age
            </button>
            {"   "}
            <button
              onClick={() => {
                updateHandlerDecrease(user.id, user.age);
              }}
            >
              Decrease age
            </button>
            {"   "}
            <span>{user.id}</span>
          </pre>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Update;
