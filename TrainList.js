import React from 'react';

function TrainList({ trains }) {
  console.log(trains); // Log the value of trains

  if (!Array.isArray(trains)) {
    return <div>No trains available.</div>;
  }

  return (
    <div>
      {trains.map((train) => (
        <div key={train.id}>
          {/* Render train details */}
        </div>
      ))}
    </div>
  );
}

export default TrainList;
