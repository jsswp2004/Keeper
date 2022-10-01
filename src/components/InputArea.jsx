import React, {useState} from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />

      <button
      onClick={""}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
export default InputArea;
// <input onChange={handleChange} type="text" value={inputText} />

// onClick={() => {
//   props.addOn(inputText);
//   setInputText("");
// }}

//   const [inputText, setInputText] = useState("");

// function handleChange(event) {
//   const newValue = event.target.value;
//   setInputText(newValue);
// }
// <input type="text"/>
