import React from "react";
import style from "./NoteItem.module.css";
import { NoteContext } from "../NoteContext";

function NoteItem(props){
    const {
        setNoteSelected,
        updateArchived
    } = React.useContext(NoteContext);

    const clickUpdateArchived = () => {
        console.log(props)
        updateArchived(props.id, !props.active)
    }

    const openForm = () => {
        setNoteSelected(props.id)
        props.setOpenModal()
    }

    return(
        <li className={style.NoteItem} key="{props.id}">
            <p onClick={openForm} className={`${style.NoteItemP} ${(!props.active ? style.NoteItemPComplete : "")}`}>
                {props.text}
            </p>
            <span className={`${style.EditBtn}`} onClick={clickUpdateArchived}>{(!props.active ? "Desarchivar" : "Archivar")}</span>
            {props.active && (<span className={`${style.EditBtn}`} onClick={openForm}>Editar</span>) }
            <span className={`${style.EditBtn}`} onClick={props.onDelete}>Borrar</span>
        </li>
    );
}

export { NoteItem };