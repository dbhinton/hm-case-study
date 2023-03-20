import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

interface ScatterplotData {
  x: number[],
  y: number[],
}

const OrderPickupTimeScatterplot = () => {
  const [scatterplotData, setScatterplotData] = useState<ScatterplotData>({ x: [], y: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/order-pickup-scatterplot/');
      setScatterplotData(response.data);
    };

    fetchData();
  }, []);

  return (
    <Plot
      data={[
        {
          x: scatterplotData.x,
          y: scatterplotData.y,
          mode: 'markers',
          marker: { color: 'blue', size: 10 },
          type: 'scatter',
        },
      ]}
      layout={{
        width: 800,
        height: 600,
        xaxis: {
          title: 'Pickup Time (number of seconds)',
        },
        yaxis: {
          title: 'Order Time (number of seconds)',
        },
        title: 'Order Time vs Pickup Time Scatterplot',
      }}
    />
  );
};

export default OrderPickupTimeScatterplot;
