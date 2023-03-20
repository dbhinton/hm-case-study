import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

function DrivethruScatterPlot() {
  const [data, setData] = useState({ x: [], y: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/drivethru-scatterplot/');
      console.log(result)
      setData(result.data);
    };
    fetchData();
  }, []);

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
