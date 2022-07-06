import React from "react";
import { selectAppender } from "../Utils/utils";
export default function DynamicDropDown() {
    
  const dropDownBuilder = async () => {
    var values = ["dog", "cat", "parrot", "rabbit"];

    var select = document.createElement("select");
    select.name = "pets";
    select.id = "pets";
    await selectAppender(values);
    for (const val of values) {
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option);
    }

    var label = document.createElement("label");
    label.innerHTML = "Choose your pets: ";
    label.htmlFor = "pets";

    (document.getElementById("container") as HTMLInputElement).appendChild(label).appendChild(select);
  };

  return (
    <>
      <div id="container"></div>
      <br />
      <div>
        <button id="generate" onClick={dropDownBuilder}>
          Generate
        </button>
      </div>
    </>
  );
}
