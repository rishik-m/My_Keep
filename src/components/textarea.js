import React, {useState} from 'react';

function TextArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    function handleClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return(
        <div>
           <form className="create-note">
             <input onChange= {handleChange} name= "title" placeholder= "Note Title" value= {note.title} />
             <textArea onChange= {handleChange} name= "content" placeholder= "Note Content" rows= "4" value= {note.content} />
             <button onClick= {handleClick}> ADD </button>
           </form>
        </div>
    )
}

export default TextArea;