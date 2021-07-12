import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Note from './components/note';
import notes from './notes';


function App() {
  return (
    <div>
      <Header />
      {notes.map(note => {
        return(
          <Note
            key= {note.key}
            title= {note.title}
            description= {note.content}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
