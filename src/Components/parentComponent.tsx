import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NameStateContext } from "../Context/NameProvider";
import { NameStateDispatchContext } from "../Context/NameProvider";
import { FormLabel, ButtonText } from "../Constants/constants";
export default function ParentComponent() {
  const history = useNavigate();
  const { setContextName } = useContext(NameStateDispatchContext);
  const { storedContextName } = useContext(NameStateContext);

  return (
    <div>
      <label>{FormLabel.FN}</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={storedContextName}
        onChange={(e: any) => {
          setContextName(e.target.value);
        }}
      />
      <button type="button" onClick={() => history("/child")}>
        {ButtonText.SUB}
      </button>
    </div>
  );
}
