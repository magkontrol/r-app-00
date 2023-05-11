import React from "react";
import classes from "./MyButton.module.scss";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.MyBtn}>
      {children}
    </button>
  );
};

export default MyButton;
