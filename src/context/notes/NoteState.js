import React, {useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=> {
  
  const host = "https://notevotes.vercel.app";

   const [notes, setNotes] = useState([]) 

//get all notes

const getAllnotes = async()=> {
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json',
      "auth-token"  : localStorage.getItem("token")
    }
    })
 const json = await response.json()
    setNotes(json)

}


// Add a note
  const addNote = async(title,description,tag)=>{
   // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
  
      headers: {
        'Content-Type': 'application/json',
        "auth-token"  : localStorage.getItem("token")
      },
      body: JSON.stringify({title,description,tag})
    })



  }
// Edit a note

const editNote =async (id,title,description,tag)=>{

  // API CALL 
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'PUT',

    headers: {
      'Content-Type': 'application/json',
      "auth-token"  : localStorage.getItem("token")
    },
    body: JSON.stringify({title,description,tag})
  })
// logic to edit 
  for(let index = 0;index < notes.len0gth; index++) {
    const  element = notes[index]
    if(element._id === id) {
      element.title = title;
      element.description = description;
      element.tag = tag;
    }
  }

    
}

// Delete Note
const deleteNote =async(id)=>{

      //API call
 // API CALL 
 const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
  method: 'DELETE',

  headers: {
    'Content-Type': 'application/json',
    "auth-token"  : localStorage.getItem("token")
  }
})

}

   return (
        <NoteContext.Provider value= {{notes,setNotes,addNote,editNote,deleteNote,getAllnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState