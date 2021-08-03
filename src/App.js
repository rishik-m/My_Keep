import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Note from './components/note';
import TextArea from './components/textarea';


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    })
  }

  return (
    <div>
      <Header />
      <TextArea onAdd= {addNote}/>
      {notes.map((singleNote) => {
        return <Note title= {singleNote.title} content= {singleNote.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
