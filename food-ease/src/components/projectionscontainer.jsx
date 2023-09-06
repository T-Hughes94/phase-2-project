import React, {useState, useEffect} from 'react'
import ProjectionsList from './projectionslist'
import Search from './search'
import AddProjectionsForm from './addprojectionsform'
import About from './about'

const API = 'http://localhost:3000/projections'
function ProjectionsContainer() {
    const [projections, setProjections] = useState([])
    const [currentSearch, setCurrentSearch] = useState('')
    
    useEffect(()=>{
          fetch(API)
          .then(res => res.json())
          .then((data) => setProjections(data))
        },[])
         
    function addProjection(newProjection) {
        fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProjection)
        })
      .then(res => res.json())
      .then((data) => setProjections([...projections, data]))
      setProjections([...projections, newProjection])
    }
        const filteredProjections = projections.filter((projection)=>{
            return projection.profit && projection.profit.toLowerCase().includes(currentSearch.toLowerCase())
        })
        
        
        
        return (
            <>
            <div>
                <Search setCurrentSearch={setCurrentSearch}/>
                <AddProjectionsForm addProjection={addProjection} />                                      
                <ProjectionsList projections={filteredProjections} />
                {/* <About /> */}
            </div>
             </>
           )
          
        }


export default ProjectionsContainer



