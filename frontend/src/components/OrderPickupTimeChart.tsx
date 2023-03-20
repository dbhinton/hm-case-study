import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

interface DriveThruOrder {
  id: number;
  arrival_time: string;
  order_time: number;
  pickup_time: number;
  total_time: number;
}

const OrderPickupTimeChart: React.FC = () => {
    const [data, setData] = useState({ x: [], y: [] });

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/order-pickup-scatterplot/');
        console.log(result)
        setData(result.data);
      };
      fetchData();
    }, []);
  return (
    <div>
      {data ? (
        <Plot
          data={[data]}
          layout={{
            title: 'Correlation between Order Time and Arrival Time',
            xaxis: {
              title: 'Arrival Time',
              automargin: true,
              tickformat: '%-I:%M %p',
              type: 'date',
            },
            yaxis: {
              title: 'Order Time',
              automargin: true,
              tickformat: '.2f',
            },
          }}
          style={{ width: '100%', height: '500px' }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderPickupTimeChart;
