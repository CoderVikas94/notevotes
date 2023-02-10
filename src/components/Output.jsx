import React, { useContext, useEffect, useState } from "react";
import conoteContextntext from "../context/notes/noteContext";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Modal } from "antd";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import  '../App.css';
import { useNavigate } from "react-router";

const Output = ({showAlert}) => {
  const [modal1Open, setModal1Open] = useState(false);
  const [editNotes, seteditNotes] = useState({title:"",description:"",tag:""});
  const Navigate= useNavigate()


  const context = useContext(conoteContextntext);
  const { deleteNote } = context;
  const { editNote } = context;

  const { notes, getAllnotes } = context;

  useEffect(() => {
    if(localStorage.getItem('token')) {
      getAllnotes();
    } else{
      Navigate('/login')
    }
     
  }, []);

  const onChange = (e)=>{
    seteditNotes({...editNotes,[e.target.name]: e.target.value})

  }

  const handleEdit = (e)=> {
   setModal1Open(true);
    seteditNotes(e);
  }

  const handleSaveEdit = async(e)=>{
    e.preventDefault();
   await  editNote(editNotes._id,editNotes.title,editNotes.description,editNotes.tag);
    setModal1Open(false);
   await getAllnotes();
    seteditNotes({title:"",description:"",tag:""});
    showAlert("Note Edited","success")


  }

  const handleDelete = async(e)=> {
   await deleteNote(e._id);
   await getAllnotes();
    console.log("eee",e);
    showAlert("Note deleted","success")




  }



  return (
    <>
      <Modal
      className="modalEdit"
        style={{
          top: 20,
        }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      > 
    <div className="Container w-50 my-5 m-auto">
        <form>
          <TextField
            className="my-2"
            label="Todos"
            type="text"
            value={editNotes.title}
            onChange={onChange}
            name="title"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            name="description"
            label="Description"
            type="text"
            value={editNotes.description}
            onChange={onChange}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="my-2"
            label="Tag"
            type="text"
            value={editNotes.tag}
            onChange={onChange}
            name="tag"
            variant="outlined"
          />

          <div className="d-flex gap-1 justify-content-center  my-4 ">
            <Button variant="contained" className="mx-2" onClick={handleSaveEdit}>
              Save
            </Button>
            <Button
              variant="outlined"
              className="mx-2"
              startIcon={<DeleteIcon />}
              onClick={() => setModal1Open(false)}
            >
      
              Cancel
            </Button>
          </div>
        </form>
        </div>

      </Modal>

      <div className="container row align-items-start mx-3 d-flex flex-column ">
      <div className="container w-25 px-5 bg-primary"><h5 className="text-white text-center">Your Notes</h5></div>
        {notes.length === 0  &&<div className="container w-25 px-5 my-5 bg-danger"><h4 className="text-white text-center">No notes available</h4></div>} 
        <div className= "row">

       {notes.map((item) => {
          return (
            <>

              <table
                className="table table-striped col-6 col-md-4 w-25 my-1 mx-1 border border-dark-subtle"
                key={item._id}
              >
                <thead>
                  <tr>
                    <th>Todo</th>
                    <th>Description</th>
                    <th>Tag</th>
                    <th className="d-flex justify-content-around align-items-center ">
                      Date
                      <FaEdit
                        onClick={() => handleEdit(item)}
                        style={{ fontSize: "18px" }}
                      />
                      <RiDeleteBinLine
                        onClick={()=>handleDelete(item)}
                        style={{ fontSize: "20px" }}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.tag}</td>
                    <td>{item.date}</td>
                  </tr>
                </tbody>
              </table>

            </>
          );
        })}
         </div>

      </div>
      
    </>
  );
};

export default Output;
