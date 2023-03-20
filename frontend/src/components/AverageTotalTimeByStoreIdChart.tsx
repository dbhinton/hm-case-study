import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

// Define interface for the shape of data returned from API
interface StoreData {
  store_id: string;
  avg_total_time: number;
}

const AverageTotalTimeByStoreIdChart = () => {
  // Set initial state for data using useState hook
  const [data, setData] = useState<StoreData[]>([]);

  // Fetch data from API using useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make GET request to API endpoint using axios library
        const response = await axios.get('http://localhost:8000/average-total-time-by-store-id/');
        // Set state with response data
        setData(response.data);
      } catch (error) {
        // Log error to console if request fails
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Map over data to extract store_id and avg_total_time values
  const x = data.map((store) => store.store_id);
  const y = data.map((store) => store.avg_total_time);

  // Render Plotly bar chart with x and y values
  return (
    <Plot
      data={[
        {
          x,
          y,
          type: 'bar',
          marker: { color: '#2196f3' },
          name: 'Orders'
        },
      ]}
      layout={{
        title: 'Average Total Time by Store ID',
        xaxis: { title: 'Store ID', type: 'category' },
        yaxis: { title: 'Average Total Time (seconds)' },
        autosize: true,
        width: 420,

      }}
    />
  );
};

export default AverageTotalTimeByStoreIdChart;
