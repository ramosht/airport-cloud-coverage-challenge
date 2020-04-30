import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from './components/Header';
import MapGrid from './components/MapGrid';
import Footer from './components/Footer';

import './style/reset.css';
import './style/style.css';

function App() {
  const [ numberOfAirports, setNumberOfAirports ] = useState(3);
  const [ numberOfClouds, setNumberOfClouds ] = useState(4);
  const [ mapDimensions, setMapDimensions ] = useState(10);
  const [ daysUntilAllAirports, setDaysUntilAllAirports ] = useState(0);
  const [ daysUntilFirstAirport, setDaysUntilFirstAirport ] = useState(0);
  const [ mapCells, setMapCells ] = useState([]);

  useEffect(() => {
    updateAnalysis();
  }, [])

  function updateAnalysis() {
    axios.post('http://localhost:3030', {
      numberOfAirports,
      numberOfClouds,
      mapDimension: mapDimensions
    })
    .then(response => {
      setMapCells(response.data.mapField);
      setDaysUntilAllAirports(response.data.daysUntilAllAirports);
      setDaysUntilFirstAirport(response.data.daysUntilFirstAirport);
    });
  }

  return (
    <Container>
      <Header 
        updateAnalysis={updateAnalysis}
        numberOfAirports={numberOfAirports}
        numberOfClouds={numberOfClouds}
        mapDimensions={mapDimensions}
        setNumberOfAirports={setNumberOfAirports}
        setNumberOfClouds={setNumberOfClouds}
        setMapDimensions={setMapDimensions}
      />
      <MapGrid mapCells={mapCells} />
      <Footer 
        daysUntilAllAirports={daysUntilAllAirports} 
        daysUntilFirstAirport={daysUntilFirstAirport}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export default App;
