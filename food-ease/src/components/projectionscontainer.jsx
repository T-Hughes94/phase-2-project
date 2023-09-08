import React, {useState, useEffect} from 'react'
import ProjectionsList from './projectionslist'
import Search from './search'
import AddProjectionsForm from './addprojectionsform'
import About from './about'
//this component is used to display the list of projections
const API = 'http://localhost:3000/projections'
function ProjectionsContainer({projections,setProjections,addProjection}) {
    // const [projections, setProjections] = useState([])
    const [currentSearch, setCurrentSearch] = useState('')
    
    //this function is used to get the list of projections
    useEffect(()=>{
          fetch(API)
          .then(res => res.json())
          .then((data) => setProjections(data))
        },[])
         //this function is used to filter the list of projections based on the current search term
        const filteredProjections = projections.filter((projection)=>{
            // console.log(projection)
            return projection.profit && projection.venue.toLowerCase().includes(currentSearch.toLowerCase())
        })
        //this function is used for the delete buttons
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
        
        // below we are diplaying these components onto our page
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



