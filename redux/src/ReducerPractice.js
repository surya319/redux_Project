import React, { useReducer, useState } from "react";

export default function ReducerPractice() {
  const [data, setData] = useState({
    name: "",
    age: 0,
    email: "",
  });
  const initialState = {
    data,
  };
  const reducerFun = (state, action) => {
    switch (action) {
      case "Update":
        return { name: data.name, age: data.age, email: data.email };
      default:
        return { name: "", age: null, email: "" };
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((ps) => {
      return { ...ps, [name]: value };
    });
  };
  const handleSubmit = () => {
    dispatch("Update");
    console.log(data);
  };
  const [iniState, dispatch] = useReducer(reducerFun, initialState.data);
  return (
    <div>
      <input type="text" name="name" onChange={handleChange} />
      <input type="number" name="age" onChange={handleChange} />
      <input type="email" name="email" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div>Name :{iniState.name}</div>
      <div>Age : {iniState.age}</div>
      <div>Email: {iniState.email}</div>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
}
