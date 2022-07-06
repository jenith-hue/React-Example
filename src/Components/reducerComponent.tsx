import React, { useReducer } from "react";
import { FormLabel } from "../Constants/constants";
export default function ReducerComponent() {
  const initialValue = {
    username: "",
    email: "",
  };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "username":
        return { ...state, username: action.payload };
      case "email":
        return { ...state, email: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <p>{FormLabel.EUN}</p>
      <input
        type="text"
        value={state.username}
        onChange={(event) =>
          dispatch({ type: "username", payload: event.target.value })
        }
      />
      <p>{FormLabel.EE}</p>
      <input
        type="email"
        value={state.email}
        onChange={(event) =>
          dispatch({ type: "email", payload: event.target.value })
        }
      />
      <div>{FormLabel.UN} {state?.username}</div>
      <div>{FormLabel.EM} {state?.email}</div>
    </div>
  );
}
