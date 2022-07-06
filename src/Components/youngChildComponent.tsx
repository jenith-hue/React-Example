import { useImperativeHandle } from "react";
import { AlertMessages, ButtonText } from "../Constants/constants";
export default function YoungChildComponent(props: any) {
  useImperativeHandle(props.myRef, () => ({
    callFirstMethod() {
      alert(AlertMessages.C1M);
    },
    callSecondMethod() {
      alert(AlertMessages.C2M);
    },
  }));

  return (
    <button type="button" onClick={props.triggerParentAlert}>
      {ButtonText.TPM}
    </button>
  );
}
