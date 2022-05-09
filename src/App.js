import { useEffect, useState } from "react";
import "./App.css";
import User from "./Components/User";

function App() {
  const [users, setUsers] = useState([]);
  const [isButton, setIsButton] = useState(false);

  const fetchRandomUser = async () => {
    await fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((json) => setUsers(json.results))
      .catch((e) => console.log(e.message));
  };

  const changeUser = async () => {
    await fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((json) => setUsers(json.results))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchRandomUser();
    setIsButton(true);
  }, []);

  return (
    <div className="App">
      <h1>Random User API</h1>
      {isButton ? <button onClick={changeUser}>Change User</button> : ""}
      {users.map((user) => {
        return <User key={user.login.uuid} user={user} />;
      })}
    </div>
  );
}

export default App;
