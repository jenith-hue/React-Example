import React, { createContext, useReducer } from "react";
export const ReducerStateContext = createContext<any>("");
export const ReducerStateDispatchContext = createContext<any>("");
export default function ReducerProvider(props: any) {
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
      const [credsValue, dispatch] = useReducer(reducer, initialValue);
  return (
    <ReducerStateContext.Provider value={{ credsValue }}>
    <ReducerStateDispatchContext.Provider value={{ dispatch }}>
      {props.children}
    </ReducerStateDispatchContext.Provider>
  </ReducerStateContext.Provider>
  )
}
