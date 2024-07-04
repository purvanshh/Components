import React, { useState } from 'react';

function NotesComponent() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const editNote = (index, newContent) => {
    const updatedNotes = notes.map((note, i) => (i === index ? newContent : note));
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="NotesComponent">
      <h3>Notes Component</h3>
      <input 
        type="text" 
        value={newNote} 
        onChange={(e) => setNewNote(e.target.value)} 
        placeholder="Add a new note"
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <input 
              type="text" 
              value={note} 
              onChange={(e) => editNote(index, e.target.value)} 
            />
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesComponent;
