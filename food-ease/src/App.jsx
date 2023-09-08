import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Header from './components/header'
import ProjectionsContainer from './components/projectionscontainer'
import './App.css'
import AddProjectionsForm from './components/addprojectionsform'
// import ProjectionsList from './components/projectionslist'
import About from './components/about'
import Footer from './components/footer'

const API = 'http://localhost:3000/projections'
function App() {
  const [projections, setProjections] = useState([])      
  function addProjection(newProjection) {
    console.log(newProjection)
    const projection = {
      "labor": newProjection.labor,
      "foodcost": newProjection.foodcost,
      "payment": newProjection.payment,
      "date":  newProjection.date,
      "venue": newProjection.venue,
      "profit": newProjection.payment - newProjection.labor - newProjection.foodcost
    }
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projection)
    })
    .then(res => res.json())
    .then((data) => setProjections([...projections, data]))
    //setProjections([...projections, newProjection])
}
    
    return (
    <>
    <BrowserRouter>
     <main>
      <Header />
      <Routes>
        <Route path="/" element={<AddProjectionsForm addProjection={addProjection} />} />
        <Route path="chart" element={<ProjectionsContainer projections ={projections} setProjections={setProjections} addProjection={addProjection}/>} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
     </main>
    </BrowserRouter>
     
    </>
  )
}

export default App
