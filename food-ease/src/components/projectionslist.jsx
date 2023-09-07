import React from 'react';
import Projection from './projection';

function ProjectionsList({ projections }) {
  const projectionsList = projections.map((projection) => {
    return <Projection key={projection.id} projection={projection} />;
  });

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