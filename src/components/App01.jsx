import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import InputArea from "./InputArea";

function App() {
  // const [items, setItems] = useState([]);
  //
  // function addItem(inputText) {
  //   setItems((prevItems) => {
  //     return [...prevItems, inputText];
  //   });
  // }

  return (
    <div>
      <Header />
      <InputArea addOn={""}/>
      <div>
        {" "}
        {notes.map(keepernotes => (
          <Note
            key={keepernotes.key}
            title={keepernotes.title}
            content={keepernotes.content}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;

// onAdd={addItem}
// <InputArea addOn={addItem}/>

// <div>
//   <InputArea />
// </div>
