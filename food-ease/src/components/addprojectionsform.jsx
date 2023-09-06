import React, { useState } from 'react'
// import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

function AddProjectionsForm({addProjection}) {
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
    }
    return(
    <div className="ui segment">
      <form onSubmit={(e)=>submitForm(e)} className="ui form">
        <div className="inline fields">
          <input type="number" name="labor" placeholder="Labor" />
          <input type="number" name="foodcost" placeholder="Food-Cost" />
          <input type="number" name="payment" placeholder="Payment" />
          <input type="date" name="date" />
          <input type="text" name="venue" placeholder="Venue" step="0.01" />
          <input type="number" name="profit" placeholder="Profit" step="0.01" />
          
        </div>
        <button  className="ui button" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
    
  }
  
  
  
    


export default AddProjectionsForm