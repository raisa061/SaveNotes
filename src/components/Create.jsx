import React, { useState } from "react";

function Create(props){
    const [note, setNote] =useState({
        title: "",
        content: ""
    });
   
    function handleChange(e){
        const {name, value} = e.target;
        setNote(prevNote=>{
            return {
                ...prevNote,
                [name]: value 
            }
        })
    }

    function submitNote(e){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }

    return <div>
        <form>
            <input name="title" placeholder="Title" 
            value={note.title} 
            onChange={handleChange}
            />
            <textarea name="content" placeholder="Take a note.." rows="3"
            value={note.content}  
            onChange={handleChange}
            />
            <button onClick={submitNote}> Add </button>
        </form>
    </div>;
}

export default Create;