import React from 'react';
import Plot from 'react-plotly.js';

interface OrderCountByHourProps {
  data: {
    hour: number;
    count: number;
  }[];
}

const OrderCountByHour = ({ data }: OrderCountByHourProps) => {
  const x = data.map((item) => item.hour);
  const y = data.map((item) => item.count);

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
        title: 'Count of Orders by Hour',
        xaxis: { title: 'Hour of Day' },
        yaxis: { title: 'Count of Orders' },
        autosize: true,
        width: 520,
        height: undefined,
        legend: { x: 0, y: 1.0 },
        margin: { t: 50 },
      }}
    />
  );
};

export default OrderCountByHour;
