import "./App.css";
import EmailPasswordAuthentication from "./components/Authentication/EmailPasswordAuth/EmailPasswordAuthentication";
import CRUD from "./components/CRUD/CRUD";

function App() {
  return (
    <div className="App">
      <CRUD />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <EmailPasswordAuthentication />
    </div>
  );
}

export default App;
