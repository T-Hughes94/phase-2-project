import React from 'react'
//this is the projection component that displays the data from the db json file
function Projection({projection}) {
     //here we destructure the projection object and return it as a string
    const {labor, foodcost, payment, date, venue, profit} = projection
    return (
     //this table displays the columns of created data
   <tr className="table-row">
        <td>{}</td>
        <td>{labor}</td>
        <td>{foodcost}</td>
        <td>{payment}</td>
        <td>{venue}</td>
        <td>{profit}</td>
   </tr>
  )
}

export default Projection