import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

function DrivethruScatterPlot() {
  const [data, setData] = useState({ x: [], y: [] });
  
  // Fetch data from API using useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      // Make GET request to API endpoint using axios library
      const result = await axios.get('http://localhost:8000/drivethru-scatterplot/');
      console.log(result)
      // Set state with response data
      setData(result.data);
    };
    fetchData();
  }, []);
  
  // Render Plotly bar chart with x and y values
  return (
    <Plot
      data={[
        {
          x: data.x,
          y: data.y,
          mode: 'markers',
          type: 'scatter',
          marker: { color: 'blue' },
        },
      ]}
      layout={{
        title: 'Drive-Thru Time vs. Arrival Time',
        xaxis: { title: 'Arrival Time' },
        yaxis: { title: 'Drive-Thru Time' },
        autosize: true,
      }}
    />
  );
}

export default DrivethruScatterPlot;
