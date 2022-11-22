import React from "react";
import { AppUI } from "./AppUI";
import { NoteProvider } from "../NoteContext";

function App() {
  return (
    <NoteProvider>
      <AppUI />
    </NoteProvider>
  );
}

export default App;