import React from "react";

import classes from "./ErrorModal.module.css";

//Remember: in HTML, we include multiple classes like this <article class="class1 class2"> 
//you can also write classes = classes.modal+" "+classes.card (gap b/w the class name must be there)

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={`${classes.modal} ${classes.card}`}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button type="submit" onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
