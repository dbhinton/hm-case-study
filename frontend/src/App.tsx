import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import { getOrderCountByHour } from './utils/api';
import { styled, List, ListItem, ListItemText, Link } from '@mui/material/';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Table from './components/Table'

const Root = styled('div')({
  display: 'flex',
});

const AppContent = styled('div')({
  flexGrow: 1,
  padding: '16px',
});

const DrawerHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '0 15px',
  justifyContent: 'flex-end',
  height: 64, // set a height to match the appbar
  backgroundColor: '#f1f5f7', // use your app's theme color
  color: '#fff', // use your app's theme text color
});

const SideMenuContainer = styled('div')({
  width: 180, // set a fixed width for the sidemenu
  backgroundColor: '#f1f5f7'
});

const SideMenuList = styled(List)({
  paddingTop: 0, // remove the default padding
  paddingLeft: 20
});

const SideMenuItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover, // use your app's theme hover color
  },
}));

const SideMenuItemText = styled(ListItemText)({
  fontSize: 14, // set a smaller font size
});

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <DrawerHeader>
        <img src="https://i.imgur.com/RVZGZIN.png" alt="logo" height="32" width="150" /> {/* Add your logo */}
      </DrawerHeader>
      <SideMenuList>
        <SideMenuItem button={false}>
        <Link href='/'><SideMenuItemText primary="Home" /></Link>
        </SideMenuItem>
        <SideMenuItem button={false}>
          <Link href='/table'><SideMenuItemText primary="Raw Data" /></Link>
        </SideMenuItem>
        {/* Add more menu items here */}
      </SideMenuList>
    </SideMenuContainer>
  );
};

function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOrderCountByHour();
      setData(result);
    };
    fetchData();
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Router>
        <Root>
          <SideMenu />
          <AppContent>
            <Routes>
              <Route path="/" element={<Dashboard data={data} toggleDrawer={toggleDrawer} />} />
              <Route path="/table" element={<Table />} />
            </Routes>
          </AppContent>
        </Root>
      </Router>
    </>
  );
}

export default App;
