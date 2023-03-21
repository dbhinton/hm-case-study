import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Table from './components/Table/Table'
import { Root, AppContent, SideMenu } from './components/Layouts/AppLayout'



function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Router>
        <Root>
          <SideMenu toggleDrawer={toggleDrawer}/>
          <AppContent>
            <Routes>
              <Route path="/" element={<Dashboard toggleDrawer={toggleDrawer} />} />
              <Route path="/table" element={<Table />} />
            </Routes>
          </AppContent>
        </Root>
      </Router>
    </>
  );
}

export default App;
