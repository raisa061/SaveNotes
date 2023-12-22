import React, { useState } from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes"
import Create from "./Create";



function App(){
    const [notes, setNotes] = useState([]);

    function addNote(note){ 
        setNotes((prevItem)=>{
            return [...prevItem, note];
        })
    }

    function deleteNote(id){
        setNotes((prevItem)=>{
            return prevItem.filter((note, index)=>{
                return index != id;
            })
        })
    }
    return (
        <div>
            <Heading />
            {/* {notes.map(noteItem => <Note 
                key= {noteItem.id}
                title = {noteItem.title}
                content = {noteItem.content}
                />
            )} */}
            <Create onAdd={addNote}/>
            {notes.map((noteItem,index)=>{
                return <Note 
                    key={index}
                    id= {index}
                    title= {noteItem.title}
                    content= {noteItem.content}
                    onDelete={deleteNote}
                />
            })}
            <Footer />
        </div>
    );
}

export default App;