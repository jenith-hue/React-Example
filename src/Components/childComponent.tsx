/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { NameStateContext } from "../Context/NameProvider";
import MemoComponent from "./memoComponent";
import { useEllipse } from "../Utils/utils";
import { ButtonText, FormLabel } from "../Constants/constants";
export default function ChildComponent() {
  const history = useNavigate();
  const { storedContextName } = useContext(NameStateContext);
  const holdedComponent = useMemo(() => {
    if (storedContextName.length > 5) {
      return <MemoComponent />;
    }
  }, [storedContextName]);
  return (
    <>
      <div>
        {FormLabel.EN} 
        {storedContextName.length < 5
          ? storedContextName
          : useEllipse(storedContextName, 5, "...")}
      </div>
      <button type="button" onClick={() => history("/")}>
        {ButtonText.PP}
      </button>
      {holdedComponent}
    </>
  );
}
