//don't use ref, because using ref means you are doing the things explicitely, so, what is the use of using react
//but if you want to just read something, not changing it, e.g. input, then only use Ref, because reading only something at the cost of updating states at each keystroke is not beneficial

import React, { useState, useRef } from "react";
import "./AddUser.css";
import ErrorModal from "./ErrorModal";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName= nameInputRef.current.value;
    const enteredAge= ageInputRef.current.value;
    const enteredCollege= collegeInputRef.current.value;

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
        college : enteredCollege
      };
      props.onAddNewUserHandler(newUser);
      nameInputRef.current.value="";
      ageInputRef.current.value="";
      collegeInputRef.current.value="";
      // setEnteredAge("");
      // setEnteredName("");
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
          ref={nameInputRef}
          // value={enteredName}
          // onChange={(e) => setEnteredName(e.target.value)}
        ></input>
        <label htmlFor="ag">Age(years)</label>
        <input
          id="ag"
          type="number"
          ref={ageInputRef}
          // value={enteredAge}
          // onChange={(e) => setEnteredAge(e.target.value)}
        ></input>
        <label htmlFor="college_name">Your College</label>
        <input
          id="college_name"
          type="text"
          ref={ageInputRef}
          // value={enteredAge}
          // onChange={(e) => setEnteredAge(e.target.value)}
        ></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
export default AddUser;
