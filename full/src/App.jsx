import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react"
import XD from "./XD"
import Login from "./login"
import Template from "./Template.jsx"
import Modal from "./components/ModalAdd.jsx"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/xd" element={<XD/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/test" element={<Modal/>}/>
        <Route path="/temp" element={<Template/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
