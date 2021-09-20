import React from "react";

const Input = ({ id, text, ...props }) => {
  return (
      <>
        <label htmlFor={id}>{text} </label>
        <input id={id} {...props}></input>
      </>
  );
};

export default Input;
