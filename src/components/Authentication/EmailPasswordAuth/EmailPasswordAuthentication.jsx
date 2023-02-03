import { auth } from "../../../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
const EmailPasswordAuthentication = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [user, setUser] = useState({});

  //! onAuthStateChanged triggers when the is some change in auth
  //? Direct onAuthStateChanged causes mulitple execution
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [auth]);

  //! Function to register user
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };

  //! Function to logIn
  const logIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPassword
      );
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };

  //! Function to logOut
  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div>
        <h3>Register User</h3>
        <input
          placeholder="Email..."
          value={registerEmail}
          type="email"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password..."
          value={registerPassword}
          type="password"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <button onClick={register}>Create User</button>
      </div>
      <div>
        <h3>LogIn</h3>
        <input
          placeholder="Email..."
          value={logInEmail}
          type="email"
          onChange={(e) => {
            setLogInEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password..."
          value={logInPassword}
          type="password"
          onChange={(e) => {
            setLogInPassword(e.target.value);
          }}
        />
        <button onClick={logIn}>LogIn</button>
      </div>
      <div>
        <h3>
          User Logged In:  {user?.email} </h3>
        <button onClick={logOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default EmailPasswordAuthentication;
