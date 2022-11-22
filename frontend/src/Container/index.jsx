import React from "react";
import { NoteSearch } from "../NoteSearch/index.jsx";
import { NoteList } from "../NoteList/index.jsx";
import { NoteItem } from "../NoteItem/index.jsx";
import { NoteContext } from "../NoteContext";
import style from "./Container.module.css"

function Container(){
  const {
    error,
    loading,
    filteredNotes,
    deleteNotes,
    totalNotes,
    setOpenModal
  } = React.useContext(NoteContext);
  return(
    <div className={style.container}>
      <NoteSearch />
      {
        <NoteList>
          {error && <p className={style.p}>Hubo un error</p>}
          {loading && <p className={style.p}>Cargando...</p>}
          { filteredNotes().map(Note => (
            <NoteItem 
              key={Note.id}
              id={Note.id}
              text={Note.title}
              active={Note.active}
              onDelete= {() => deleteNotes(Note.id)}
              setOpenModal={() => setOpenModal(prevState => !prevState)}
            />
          ))}
        </NoteList>
      }
      {(!filteredNotes().length && totalNotes.length != 0) && 
        <h3 className={style.p}>No hay coincidencias</h3>}
    </div>
  );
}

export { Container };