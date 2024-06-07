import React, { useEffect, useState } from "react";

import NoteContainer from "./Components/RightSection/NoteContainer";
import Sidebar from "./Components/LeftSection/LeftSection";
import HeaderBar from "./Components/Header/Header";

import "./App.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  // -------------------------For Creating new Note-------------------------------
  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: new Date().toLocaleString(),
      color,
    });
    setNotes(tempNotes);
    // setShowHeaderBar(true);
  };

  // ---------------------For deleting individual note--------------------------
  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0)return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };


  // -----------------------For Modifying Note after creation----------------------
  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  // -----------------------To save the notes in Local Storage---------------------
  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);


  return (
    <div className="App">
      
      <div className="Header-wrapper">
        <HeaderBar addNote = {addNote}/>
      </div>

      <div className="container">
      <div className="left-wrapper">
        <Sidebar/>
      </div>
      
      <div className="right-wrapper">
        <NoteContainer
          notes={notes}
          deleteNote={deleteNote}
          updateText={updateText}
        />
      </div>
      </div>
      
      
    </div>
  );
}

export default App;
