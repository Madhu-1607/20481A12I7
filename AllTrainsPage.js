import React, { useEffect, useState } from 'react';
import TrainList from '../components/TrainList';
import { getAllTrains } from '../api';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const authToken = ''; // Add your authentication token here
        const trainsData = await getAllTrains(authToken);
        setTrains(trainsData);
      } catch (error) {
        console.log('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains Page</h1>
      {trains.length > 0 ? (
        <TrainList trains={trains} />
      ) : (
        <p>No trains available.</p>
      )}
    </div>
  );
};

export default AllTrainsPage;
