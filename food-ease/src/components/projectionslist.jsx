import React from 'react';
import Projection from './projection';
//this component is used to display the list of projections
function ProjectionsList({ projections }) {
  //here we use map to display the list of projections
  const projectionsList = projections.map((projection) => {
   //then we use the projection component to display each projection
    return <Projection key={projection.id} projection={projection} />;
  });
  //finally we return the list of projections in the table below passing the list of projections
  return (
    <div id="table-div">
    <table className="table-container">
      <tbody key={'hello'}>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Labor</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Cost</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Payment</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Venue</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Profit</h3>
          </th>
        </tr>
        {projectionsList}
      </tbody>
    </table>
    </div>
  );
}

export default ProjectionsList;