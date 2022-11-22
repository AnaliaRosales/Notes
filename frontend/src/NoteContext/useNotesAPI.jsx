import { useState } from "react";
import React from "react";
import { API_URL } from "../constants"

function useNotesAPI(initialValue){
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState(initialValue);

  React.useEffect(() => {
    fetch(`${API_URL}/notes`)
      .then((response) => response.json())
      .then((response) => {
        try {
          setNotes(response['data']);
          setLoading(false);
        } catch(error) {
          setError(error);
        }
      });
  }, []);

  const saveNotes = (newItem) => {
    try {
    setNotes(newItem);
    } catch(error) {
      setError(error);
    }
  };

  const addNotes = (title, description) => {
    if (!title.trim() || !description.trim()) {
      alert("Title or description is empty");
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "active": true,
      "title": title,
      "description": description
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${API_URL}/notes`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        const newNotes = [...notes];
        newNotes.push(result['data']);
        saveNotes(newNotes);
      })
      .catch(error => console.log('error', error));
  }

  const updateNotes = (id, title, description) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "title": title,
      "description": description
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`${API_URL}/notes/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        const noteIndex = notes.findIndex(note => note.id === id);
        const newNotes = [...notes];
        newNotes.splice(noteIndex, 1);
        newNotes.push(result['data']);
        saveNotes(newNotes);
      })
      .catch(error => console.log('error', error));
  }

  const updateArchived = (id, archivedValue) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "active": archivedValue
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`${API_URL}/notes/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        const noteIndex = notes.findIndex(note => note.id === id);
        const newNotes = [...notes];
        newNotes.splice(noteIndex, 1);
        newNotes.push(result['data']);
        saveNotes(newNotes);
      })
      .catch(error => console.log('error', error));
  }

  const deleteNotes = (id) => {
    var requestOptions = {
      method: 'DELETE'
    };
    
    fetch(`${API_URL}/notes/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        const noteIndex = notes.findIndex(note => note.id === id);
        const newNotes = [...notes];
        newNotes.splice(noteIndex, 1);
        saveNotes(newNotes);
      })
      .catch(error => console.log('error', error));
  }

  return {
    notes,
    saveNotes,
    loading,
    error,
    deleteNotes,
    addNotes,
    updateNotes,
    updateArchived
  };
}

export { useNotesAPI };