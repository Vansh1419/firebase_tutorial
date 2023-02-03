import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../utils/firebase-config";
const Read = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionReference = collection(database, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionReference);
      //!   console.log(data.docs[0].id);
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
export default Read;
