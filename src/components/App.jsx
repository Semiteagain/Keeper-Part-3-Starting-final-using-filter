import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function updateNote(noteList) {
    setNote((prevNote) => {
      return [...prevNote, noteList];
    });
  }

  function deleteItem(id) {
    setNote((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAddList={updateNote} />
      {note.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
