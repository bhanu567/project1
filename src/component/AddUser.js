import React, { useState } from "react";
import "./AddUser.css";
import ErrorModal from "./ErrorModal";
const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please Enter a valid name and age (non-empty values).",
      });
      return;
    } else if (+enteredAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age > 0",
      });
      return;
    } else {
      const newUser = {
        name: enteredName,
        age: enteredAge,
      };
      props.onAddNewUserHandler(newUser);
      setEnteredAge("");
      setEnteredName("");
    }
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div className="form">
      {error && (
        <ErrorModal
          message={error.message}
          title={error.title}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={addUserHandler}>
        <label htmlFor="nm">Username</label>
        <input
          id="nm"
          type="text"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        ></input>
        <label htmlFor="ag">Age(years)</label>
        <input
          id="ag"
          type="number"
          value={enteredAge}
          onChange={(e) => setEnteredAge(e.target.value)}
        ></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
export default AddUser;
