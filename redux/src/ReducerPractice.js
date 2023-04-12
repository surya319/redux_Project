import React, { useReducer, useRef, useState } from "react";

export default function ReducerPractice() {
  const [data, setData] = useState({
    name: "",
    age: null,
    email: ""
  });
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
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
    nameRef.current.value = "";
    ageRef.current.value = "";
    emailRef.current.value = "";
  };
  const [iniState, dispatch] = useReducer(reducerFun, initialState.data);
  return (
    <div>
      <div>Name :{iniState.name}</div>
      <div>Age : {iniState.age}</div>
      <div>Email: {iniState.email}</div>
      <input type="text" name="name" onChange={handleChange} ref={nameRef} />
      <input type="number" name="age" onChange={handleChange} ref={ageRef}/>
      <input type="email" name="email" onChange={handleChange} ref={emailRef}/>
      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => dispatch("Reset")}>Reset</button>
      </div>
    </div>
  );
}
