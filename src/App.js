import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import Alert  from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert,setalert] = useState(null);
  const showAlert = (msg,type)=>{

    setalert({
      msg: msg,
      type: type
    })
    setTimeout(()=>{setalert(null)},2000)

  }
  return (
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Alert alert={alert}/>
      <Routes>
        <Route path="/" index element={<Home showAlert={showAlert}/>} />
        <Route path="/about" index element={<About />} />
        <Route path="/contact" index element={<Contact />}></Route>
        <Route path="/login" index element={<Login showAlert={showAlert}/>}></Route>
        <Route path="/signup" index element={<Signup showAlert={showAlert} />}></Route>
      </Routes>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;
