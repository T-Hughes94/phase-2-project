import React, {useState, useEffect} from 'react'
import ProjectionsList from './projectionslist'
import Search from './search'
import AddProjectionsForm from './addprojectionsform'
import About from './about'

const API = 'http://localhost:3000/projections'
function ProjectionsContainer({projections,setProjections,addProjection}) {
    // const [projections, setProjections] = useState([])
    const [currentSearch, setCurrentSearch] = useState('')
    
    useEffect(()=>{
          fetch(API)
          .then(res => res.json())
          .then((data) => setProjections(data))
        },[])
         
        const filteredProjections = projections.filter((projection)=>{
            console.log(projection)
            return projection.profit && projection.venue.toLowerCase().includes(currentSearch.toLowerCase())
        })
        
        function deleteProjection(id) {
            fetch(`${API}/${id}`,)
            .then(res => res.json())
            .then(data =>{
                const newProjections = projections.filter((projection) => {

                    if(id === projection.id) {
                        return false
                    }
                    return true
                })
               
                setProjections(newProjections)
            })
            }
        
        
        return (
            <>
            <div>
                <Search setCurrentSearch={setCurrentSearch}/>
                {/* <AddProjectionsForm addProjection={addProjection} />                                       */}
                <ProjectionsList projections={filteredProjections} />
                {/* <About /> */}
                {}
            </div>
             </>
           )
          
        }


export default ProjectionsContainer



