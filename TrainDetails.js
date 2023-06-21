import React from 'react';

const TrainDetails = ({ train }) => {
  return (
    <div>
      <h2>Train Details</h2>
      <p>Train ID: {train.id}</p>
      <p>Train Name: {train.name}</p>
      <p>Origin: {train.origin}</p>
      <p>Destination: {train.destination}</p>
    </div>
  );
};

export default TrainDetails;
