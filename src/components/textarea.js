import React, {useState} from 'react';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function TextArea(props) {

    const [state, setState] = useState(false);

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

    function expand() {
        setState(true);
    }

    return(
        <div>
           <form className="create-note">
             {state && (<input onChange= {handleChange} name= "title" placeholder= "Note Title" value= {note.title} />)}
             <textArea onClick= {expand} onChange= {handleChange} name= "content" placeholder= "Note Content" rows= {state ? 4 : 1} value= {note.content} />
             <Zoom in= {state}>
             <Fab onClick= {handleClick}> <AddCircleSharpIcon /> </Fab>
             </Zoom>
           </form>
        </div>
    )
}

export default TextArea;