import React, {useState} from "react";
import "./App.css";
import AddUser from "./component/AddUser";
import UsersList from "./component/UsersList";

function App() {
  const[display, setDisplay]=useState(false);
  const [usersList, setUsersList] = useState([]);
  const addNewUser =(newUser)=>{
    setUsersList((prevUser)=>{
      return [...prevUser, newUser];
    })
    setDisplay(true);
  }
  return (
    <div className="App">
      <AddUser onAddNewUserHandler={addNewUser}/>
      {display?(<UsersList usersData={usersList}/>):null}
    </div>
  );
}

export default App;
