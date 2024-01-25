import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react"
import XD from "./XD"
import Login from "./login"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/xd" element={<XD/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
