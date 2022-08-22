import React, { useState } from "react";

function CreateArea(props) {
  const [noteList, setNoteList] = useState({
    title: "",
    content: ""
  });

  function handleChangeNote(event) {
    const { name, value } = event.target;

    setNoteList((preVNoteList) => {
      return {
        ...preVNoteList,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAddList(noteList);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChangeNote}
          placeholder="Title"
          value={noteList.title}
        />
        <textarea
          name="content"
          onChange={handleChangeNote}
          placeholder="Take a note..."
          rows="3"
          value={noteList.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
