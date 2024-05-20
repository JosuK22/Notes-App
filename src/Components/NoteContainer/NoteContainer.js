import React from "react";

import Note from "../Note/Note";

import "./NoteContainer.css";

import noteIcon from "../../assets/note_plus.png";

function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverArray(props.notes);

  return (
    <div className="note-container">
      
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <div className="note-container_empty">
            <h3>For new notes click<img src={noteIcon} id="temp-icon" alt="Add Note"/></h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
