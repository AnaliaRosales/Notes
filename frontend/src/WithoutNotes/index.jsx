import React from "react";
import style from "./WithoutNotes.module.css"

function WithoutNotes(){
  return(
    <div className={style.gral}>
        <h1 className={style.h1}>Crea notas!</h1>
        <p className={style.p}>Presiona el botón amarillo para escribir una</p>
    </div>
  );
}

export { WithoutNotes };