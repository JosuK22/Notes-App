import React from "react";

import deleteIcon from "../../assets/delete.svg";

import "./Note.css";

function Note(props) {

  const formatDate = (value) => {
    if (!value) return "";
  
    const date = new Date(value);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12; 
  
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
  
    let day = date.getDate();
    const month = monthNames[date.getMonth()];
  
    return `${hrs}:${min} ${amPm} - ${day} ${month}`;
  };
  
  let timeout;
  const timer = 300; 
  
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };
  
  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };
  

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">

        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
        <p>{formatDate(props.note.time)}</p>
        
      </div>
    </div>
  );
}

export default Note;
