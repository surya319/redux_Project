import React from 'react'
import { useSelector } from "react-redux";
export default function Profile() {
    const data = useSelector(state => state.userReducer.value)
  return (
    <div>
        <h4>Profile data</h4>
        <ul>
            <li>Name:{data.name}</li>
            <li>Age:{data.age}</li>
            <li>Email:{data.email}</li>
        </ul>
    </div>
  )
}
