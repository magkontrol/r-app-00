import React, { useState } from "react";

function InputState() {
  const [value, setValue] = useState("123");

  return (
    <>
      <h2>{value}</h2>
      <input onChange={(event) => setValue(event.target.value)}></input>
      <input value={value}></input>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </>
  );
}
export default InputState;
