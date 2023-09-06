import React from 'react'

function Projection({projection}) {
    const {labor, foodcost, payment, date, venue, profit} = projection
    return (
   <tr className="table-row">
        <td>{date}</td>
        <td>{labor}</td>
        <td>{foodcost}</td>
        <td>{payment}</td>
        <td>{venue}</td>
        <td>{profit}</td>
   </tr>
  )
}

export default Projection