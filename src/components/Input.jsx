import React, { useContext, useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import conoteContextntext from "../context/notes/noteContext"







const Input = ({showAlert}) => {
  const [note, setNote] = useState({title:"",description:"",tag:""});
  
const context = useContext(conoteContextntext)
const {addNote,getAllnotes} = context


const onChange = (e)=>{
  setNote({...note,[e.target.name]: e.target.value})
}

const handleChange = async(e)=>{
 e.preventDefault()
  await addNote(note.title,note.description,note.tag)
  await  getAllnotes();
  setNote({title:"",description:"",tag:""});
  showAlert("Notes Added","success")

}

  return (
    <div className="Container w-25 my-0 m-auto">

        <form>
      <TextField className="my-2" label="Todos" type="text"
        value={note.title}
        onChange={onChange} name="title" variant="outlined" />
      <TextField id="outlined-basic" name="description" label="Description" type="text"
       value={note.description}
       onChange={onChange} variant="outlined" />
      <TextField  id="outlined-basic" className="my-2" label="Tag" type="text"
       value={note.tag}
       onChange={onChange}   name="tag" variant="outlined" />
    
      <div className="d-flex gap-1 justify-content-inherit  my-4 ">
      <Button variant="contained" className="mx-2" onClick={handleChange}>Save</Button> 
      <Button variant="outlined" className="mx-2" startIcon={<DeleteIcon/>} > Delete
    </Button>
      </div>
      </form>

    </div>
  );
};

export default Input;
