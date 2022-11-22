import React from "react";
import { NoteContext } from "../NoteContext";
import style from "./NoteForm.module.css";

function NoteForm() {

  const [newNoteTitle, setNewNoteTitle] = React.useState('');
  const [newNoteValue, setNewNoteValue] = React.useState('');
  const [noteId, setNoteId] = React.useState(null);

  const {
    addNotes,
    setOpenModal,
    consol,
    noteSelectedItem,
    updateNotes
  } = React.useContext(NoteContext);

  React.useEffect(() => {
    let note = noteSelectedItem()
    if (note) {
      setNewNoteTitle(note.title)
      setNewNoteValue(note.description)
      setNoteId(note.id)
    }
  }, []);

  const onChange = (event) => {
    setNewNoteValue(event.target.value);
  }

  const onChangeInput = (event) => {
    setNewNoteTitle(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(newNoteValue.length <= 0 || newNoteTitle.length <= 0) return;
    let note = noteSelectedItem()
    if (note) { 
      updateNotes(noteId, newNoteTitle, newNoteValue)
    } else {
      addNotes(newNoteTitle, newNoteValue);
    }
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva nota</label>
      <input
        value={newNoteTitle}
        onChange={onChangeInput}
        placeholder="Titulo"
      />
      <textarea
        value={newNoteValue}
        onChange={onChange}
        placeholder="Cortar la palta para el almuerzo"
      />
      <div className={style.noteFormButtonContainer}>
        <button
          type="button"
          className={style.noteFormButton + ' ' + style.noteFormButtonCancel}
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={!newNoteValue}
          className={style.noteFormButton + " " + (!newNoteValue ? style.noteFormButtonAddDisabled : style.noteFormButtonAdd)}
        >
          Agregar
        </button>
      </div>
    </form>
  );
}

export { NoteForm };