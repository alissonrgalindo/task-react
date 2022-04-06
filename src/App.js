import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import Form from "./components/Form"
import Home from "./Pages/Home"
import View from "./Pages/View"
import Create from "./Pages/Create"
import Edit from "./Pages/Edit"
import EditSubTask from "./Pages/EditSubTask"
import AddSubtask from "./Pages/AddSubtask"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit/:taskId" element={<Edit/>} />
        <Route path="/edit/:taskId/sub/:id" element={<EditSubTask/>} />
        <Route path="/view/:taskId/sub/:id" element={<View/>} />
        <Route path="/addSubtask/:taskId" element={<AddSubtask/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
