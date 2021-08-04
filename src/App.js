import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Note from './components/note';
import TextArea from './components/textarea';


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prev) => {
      return [...prev, newNote];
    })
  }

  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((singleNote, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <TextArea onAdd= {addNote}/>
      {notes.map((singleNote, index) => {
        return <Note key= {index} id= {index} title= {singleNote.title} content= {singleNote.content} onDelete= {deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
