import React, { createContext, useState } from "react";
export const NameStateContext = createContext<any>("");
export const NameStateDispatchContext = createContext<any>("");
export default function NameProvider(props: any) {
  const [storedContextName, setContextName] = useState("");
  return (
    <NameStateContext.Provider value={{ storedContextName }}>
      <NameStateDispatchContext.Provider value={{ setContextName }}>
        {props.children}
      </NameStateDispatchContext.Provider>
    </NameStateContext.Provider>
  );
}
