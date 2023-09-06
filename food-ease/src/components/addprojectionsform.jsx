import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

function AddProjectionsForm({addProjection}) {
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
     addProjection(newProjection)
     navigate("/chart")
    }
    return(
    <div className="form-div">
      <form id = "formz" onSubmit={(e)=>submitForm(e)} className="ui form">
        
          <input class="formz-class" type="number" name="labor" placeholder="Labor" />
          <input class="formz-class" type="number" name="foodcost" placeholder="Food-Cost" />
          <input class="formz-class" type="number" name="payment" placeholder="Payment" />
          <input class="formz-class" type="date" name="date" />
          <input class="formz-class" type="text" name="venue" placeholder="Venue" step="0.01" />
          <input class="formz-class" type="number" name="profit" placeholder="Profit" step="0.01" />
          
        
        <button  className="ui button" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
    
  }
  
  
  
    


export default AddProjectionsForm