import React , {useState} from "react";
import "./Header.css";
import icon from "../../assets/note_plus.png";

function HeaderBar(props){
    const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="Header-bar">

          <div className="Header-bar__left">
            <h3 id="logo">Notes</h3>
          </div>

          <img src={icon} alt="Add Note" onClick={togglePopup}/>
          {isPopupOpen && (
  
          <div className="note-popup">
  
              <div className="note-color-options">
  
                {colors.map((item, index) => (
                  <div
                    key={index}
                    className="note-color-option"
                    style={{ backgroundColor: item }}
                    onClick={() => {
                      props.addNote(item);
                      setIsPopupOpen(false);
                    }}
                  />
               ))}
  
              </div>
            
          </div>
        )}
  
        </div>
      );
}

export default HeaderBar;