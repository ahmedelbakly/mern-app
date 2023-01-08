import { useState, useEffect, useCallback } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./components/Loading";
import Profile from "./components/Profile";

function App() {
  const [users, setUsers] = useState("undefined");
  const [index, setIndex] = useState();
  const getUsers = async() => {
    const res = await axios.get(
      `http://localhost:5000/api/user/getUsers/${index}`
    );
    setUsers(res.data);
  };

  useEffect(() => {
  
    getUsers();

  }, [index]);
  console.log(users);
  return (
    <div className="App">
      <h1 className="main-title">test deploy MERN project</h1>
      <div className="button-box">
        <button
          onClick={() => {
            setIndex(0);
          }}
        >
          Ahmed
        </button>
        <button
          onClick={() => {
            setIndex(1);
          }}
        >
          Hadeer
        </button>
        <button
          onClick={() => {
            setIndex(2);
          }}
        >
          Omar
        </button>
      </div>

      {users === "undefined" ? <Loading /> : <Profile users={users} />}
    </div>
  );
}

export default App;
