import React from "react";
import { useNotesAPI } from "./useNotesAPI";
import { useState } from "react";
import { API_URL } from "../constants"

const NoteContext = React.createContext();

function NoteProvider(props){
  const {
    notes,
    saveNotes,
    loading,
    error,
    deleteNotes,
    addNotes,
    updateNotes,
    updateArchived
  } = useNotesAPI([]);
  const [searchArchived, setSearchArchived] = React.useState(false);
  const [noteSelected, setNoteSelected] = useState(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const archivedNotes = notes.filter(note => note.active != searchArchived);

  const filteredNotes = () => {
    if ( searchValue.length == 0){
      return archivedNotes
    } else {
      return archivedNotes.filter(note => {
        const noteText = note.title.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return noteText.includes(searchText)
      })
    }
  }

  const totalNotes = filteredNotes().length;

  const noteSelectedItem = () => {
    if (noteSelected){
      return notes.find(note => note.id == noteSelected)
    } else {
      return null;
    }
  }

  return(
    <NoteContext.Provider value={{
      notes,
      loading,
      error,
      totalNotes,
      archivedNotes,
      addNotes,
      searchValue,
      setSearchValue,
      deleteNotes,
      openModal,
      setOpenModal,
      noteSelected,
      setNoteSelected,
      noteSelectedItem,
      updateNotes,
      filteredNotes,
      searchArchived,
      setSearchArchived,
      updateArchived
    }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export { NoteContext, NoteProvider };