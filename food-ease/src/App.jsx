import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Header from './components/header'
import ProjectionsContainer from './components/projectionscontainer'
import './App.css'
import AddProjectionsForm from './components/addprojectionsform'
// import ProjectionsList from './components/projectionslist'
import About from './components/about'


function App() {
    
    
    return (
    <>
    <BrowserRouter>
     <main>
      <Header />
      <Routes>
        <Route path="/" element={<AddProjectionsForm />} />
        <Route path="chart" element={<ProjectionsContainer />} />
        <Route path="about" element={<About />} />
      </Routes>
     </main>
    </BrowserRouter>
     
    </>
  )
}

export default App
