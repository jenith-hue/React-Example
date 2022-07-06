import React, { useRef } from "react";
import { AlertMessages, ButtonText } from "../Constants/constants";
import YoungChildComponent from "./youngChildComponent";
export default function ReferenceComponent() {
  const childRef: any = useRef(null);
  const parentAlert = () =>{
    alert(AlertMessages.AFP);
  }
  return (
    <>
      <button type="button" onClick={() => childRef.current.callFirstMethod()}>
        {ButtonText.T1C}
      </button>
      <button type="button" onClick={() => childRef.current.callSecondMethod()}>
        {ButtonText.T2C}
      </button>
      <YoungChildComponent myRef={childRef} triggerParentAlert={parentAlert} />
    </>
  );
}
