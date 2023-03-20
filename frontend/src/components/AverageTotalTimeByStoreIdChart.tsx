import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

interface StoreData {
  store_id: string;
  avg_total_time: number;
}

const AverageTotalTimeByStoreIdChart = () => {
  const [data, setData] = useState<StoreData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/average-total-time-by-store-id/');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const x = data.map((store) => store.store_id);
  const y = data.map((store) => store.avg_total_time);


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
