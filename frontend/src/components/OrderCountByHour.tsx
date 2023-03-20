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
  const y = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];
  const z = data.map((item) => item.count);
  const yIndices = y.map((_, i) => i);

  return (
    <Plot
      data={[
        {
          x,
          y: yIndices,
          z: [z],
          type: 'heatmap',
          colorscale: 'Viridis',
          colorbar: {
            title: 'Count of Orders',
            titleside: 'right'
          }
        }
      ]}
      layout={{
        title: 'Count of Orders by Hour',
        xaxis: { title: 'Hour of Day' },
        yaxis: { 
          tickvals: y,
          ticktext: y.map((hour) => `${hour} - ${hour === '11 PM' ? '12 AM' : `${parseInt(hour) + 1} AM`}`),
        },
                autosize: true,
        width: 420,
        margin: { t: 50 },
      }}
    />
  );
};

export default OrderCountByHour;
