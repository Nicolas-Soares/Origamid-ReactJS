import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <form>
      <Input id="email" type='text' text="Email" required />
      <Input id="password" type='password' text="Senha" />
      <Button />
    </form>
  );
};

export default Form;
