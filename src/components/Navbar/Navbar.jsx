import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link as RouterLink } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';
import './Navbar.style.css'

const navItems = [
  { label: 'Home', id: 'main' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  const drawer = (
    <Box onClick={toggleDrawer} sx={{ width: 250 }}>
      <List>
      {navItems.map(item => (
    <ListItem key={item.label} disablePadding>
      <ListItemButton
        onClick={() => {
          const headerHeight = 64;
          scrollToSection(item.id, headerHeight); 
          toggleDrawer();                         
        }}
      >
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItem>
  ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
      position="fixed" elevation={0} sx={{ backgroundColor: 'black',top: 0,left:0,right: 0, zIndex: (theme) => theme.zIndex.drawer + 1, }}
      >
      <Toolbar
        disableGutters sx={{ px: 0 }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          className="navbar-logo"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            ml:2,
          }}
        >
          민지's Portfolio
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ml : 'auto', mr:1}}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}> 
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ ml: 'auto', display: 'flex', gap: 2, mr: 2 }}>
            {navItems.map(item => (
              <Button
                key={item.label}
                onClick={() => {
                  const headerHeight = 64;
                  scrollToSection(item.id, headerHeight);
                }}
                sx={{
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
    </>
  );
}
