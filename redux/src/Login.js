import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./userReducer";
export default function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              name: "Surya Gunasekaran",
              age: 24,
              email: "suryagunasekaran24@gmail.com",
            })
          )
        }
      >
        Login
      </button>
    </div>
  );
}
