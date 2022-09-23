import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />

      {notes.map(keepernotes =>
        <Note
        key={keepernotes.key}
        title={keepernotes.title}
        content={keepernotes.content}/>
      )}

      <Footer />
    </div>
  );
}

export default App;
