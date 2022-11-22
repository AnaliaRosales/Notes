import React from "react";
import { NoteContext } from "../NoteContext";
import style from "./NoteSearch.module.css";

function NoteSearch() {

  const {
    searchValue,
    setSearchValue,
    searchArchived,
    setSearchArchived
  } = React.useContext(NoteContext);
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  };

  const onSearchArchivedChange = (event) => {
    setSearchArchived(!searchArchived)
  };

  return(
    <div className={style.NoteSearchContainer}>
      <input
      className={style.NoteSearch}
      placeholder="Buscar nota"
      value={searchValue}
      onChange={onSearchValueChange}
      />

    <div className={style.CheckboxInput}>
      <input type="checkbox" value={searchArchived} onChange={onSearchArchivedChange} />
      <span>Archivados</span>
    </div>
    
    </div>
  );
}

export { NoteSearch };