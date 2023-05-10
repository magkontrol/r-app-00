import React, { useState } from "react";
import Counter from "./components/Counter";
import InputState from "./components/InputState";
import ClassCounter from "./components/ClassCounter";

function App() {
  return (
    <div className="App">
      <Counter />
      <InputState />
      <ClassCounter />
    </div>
  );
}

export default App;
