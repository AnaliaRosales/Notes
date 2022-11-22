import React from "react";
import "./NoteList.module.css";

function NoteList(props) {
  return(
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { NoteList };