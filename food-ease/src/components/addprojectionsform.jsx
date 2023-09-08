import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
//this is the form for adding a new projection
function AddProjectionsForm({addProjection}) {
  //by default, navigate to the home page
  const navigate = useNavigate()
  function submitForm(e){
    e.preventDefault()
    // addProjection(e.target.value)
    const newProjection = {
        labor: e.target.labor.value,
        foodcost: e.target.foodcost.value,
        payment: e.target.payment.value,
        date: e.target.date.value,
        venue: e.target.venue.value,
        profit: e.target.profit.value
     }
     //this is where we add the new projection to the database
     addProjection(newProjection)
     //our router will redirect to the chart page
     navigate("/chart")
    }
    
    return(
    //here is where we store the inputs for the form
    <div className="form-div">
      <form id = "formz" onSubmit={(e)=>submitForm(e)} className="ui form">
        
          <input className="formz-class" type="number" name="labor" placeholder="Labor" />
          <input className="formz-class" type="number" name="foodcost" placeholder="Food-Cost" />
          <input className="formz-class" type="number" name="payment" placeholder="Payment" />
          <input className="formz-class" type="date" name="date" />
          <input className="formz-class" type="text" name="venue" placeholder="Venue" step="0.01" />
          <input className="formz-class" type="number" name="profit" placeholder="Profit" step="0.01" />
          
        
        <button onClick={()=>{}}  className="ui-button" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
    
  }
  
  
  
    


export default AddProjectionsForm