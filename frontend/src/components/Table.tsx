import * as React from 'react';
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface DriveThruOrder {
  id: number;
  store_id: number;
  arrival_time: string;
  order_time: number;
  pickup_time: number;
  total_time: number;
}

const DriveThruOrdersTable: React.FC = () => {
  const [orders, setOrders] = useState<DriveThruOrder[]>([]); // State for all orders
  const [filteredOrders, setFilteredOrders] = useState<DriveThruOrder[]>([]); // State for filtered orders

  useEffect(() => {
    fetch('http://localhost:8000/api/drivethruorders/')
      .then(response => response.json())
      .then(data => {
        setOrders(data); // Set all orders when data is fetched
        setFilteredOrders(data); // Set filtered orders to all orders when data is fetched initially
      })
      .catch(error => console.error(error));
  }, []);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterText = e.target.value.trim();
    setFilteredOrders(orders.filter(order => order.store_id.toString().includes(filterText))); // Filter orders by store_id when user enters filter text
  };

  return (
    <>
      <input type="text" placeholder="Filter by Store ID" onChange={handleFilter} /> {/* Input field for filtering */}
      <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Store ID</TableCell>
              <TableCell>Arrival Time</TableCell>
              <TableCell>Order Time</TableCell>
              <TableCell>Pickup Time</TableCell>
              <TableCell>Total Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.store_id}</TableCell>
                <TableCell>{order.arrival_time}</TableCell>
                <TableCell>{order.order_time}</TableCell>
                <TableCell>{order.pickup_time}</TableCell>
                <TableCell>{order.total_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DriveThruOrdersTable;
