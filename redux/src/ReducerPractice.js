import React, { useReducer } from "react";

export default function ReducerPractice() {
  const initialState = {
    name: "",
    age: 0,
    email: "",
  };
  const reducerFun = (state, action) => {
    switch (action) {
      case "Update":
        return { name: "surya", age: 24, email: "surya@gmail.com" };
      case "Reset":
        return initialState
      default:
        return state;
    }
  };
  const [iniState, dispatch] = useReducer(reducerFun, initialState);
  return (
    <div>
      <div>Name :{iniState.name}</div>
      <div>Age : {iniState.age}</div>
      <div>Email: {iniState.email}</div>
      {/* <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button> */}
      <button onClick={() => dispatch("Update")}>GetDetails</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
}
