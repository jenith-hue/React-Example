import React, { useContext } from "react";
import { ReducerStateDispatchContext } from "../Context/ReducerProvider";
import { ReducerStateContext } from "../Context/ReducerProvider";
import { FormLabel } from "../Constants/constants";
export default function ReducerWC() {
  const {dispatch} = useContext(ReducerStateDispatchContext);
  const {credsValue} = useContext(ReducerStateContext);  
  return (
    <div>
      <p>{FormLabel.EUN}</p>
      <input
        type="text"
        value={credsValue.username}
        onChange={(event) =>
            dispatch({
            type: "username",
            payload: event.target.value,
          })
        }
      />
      <p>{FormLabel.EE}</p>
      <input
        type="email"
        value={credsValue.email}
        onChange={(event) =>
            dispatch({
            type: "email",
            payload: event.target.value,
          })
        }
      />
      <div>{FormLabel.UN} {credsValue.username}</div>
      <div>{FormLabel.EM} {credsValue.email}</div>
    </div>
  );
}
