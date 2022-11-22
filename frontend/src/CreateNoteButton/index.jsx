import React from "react";
import style from "./CreateNoteButton.module.css";
import { NoteContext } from "../NoteContext";

function CreateNoteButton(props){
  const {
      setNoteSelected
  } = React.useContext(NoteContext);

  const createNote = () => {
    setNoteSelected(null);
    props.setOpenModal(prevState => !prevState);
  }
  return (
    <button
      className={style.CreateNoteButton}
      onClick={createNote}
    >
      +
    </button>
  );
}

export { CreateNoteButton };