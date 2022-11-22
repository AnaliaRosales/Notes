import React from "react";
import { NoteContext } from "../NoteContext/index.jsx";
import { CreateNoteButton } from "../CreateNoteButton/index.jsx";
import { Modal } from "../Modal/index.jsx";
import { NoteForm } from "../NoteForm/index.jsx";
import { Container } from "../Container/index.jsx";
import { WithoutNotes } from "../WithoutNotes/index.jsx";

function AppUI(){
  const {
    openModal,
    setOpenModal,
    loading,
    totalNotes,
    notes
  } = React.useContext(NoteContext);
  return(
    <>
      {(!loading && notes.length == 0) && 
      <WithoutNotes />}
      {(!loading && totalNotes >= 0 && notes.length > 0) && 
      <Container/>}
      {!!openModal && (
        <Modal>
          <NoteForm />
        </Modal>
      )}
      <CreateNoteButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </>
  );
}

export { AppUI };