import React from 'react';
import { Box, Link } from '@mui/material';
import { FaGithub } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        left: 16,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 75, 
      }}
    >
      <Link href="https://github.com/leealswl" target="_blank" rel="noopener" sx={{ color: 'inherit' }} >
        <FaGithub size={28} color="#999999" />
      </Link>
      <Box
        sx={{
          flexGrow: 1,                
          width: '2px',               
          bgcolor: 'rgba(255,255,255,0.3)', 
          mt: 2,                      
        }}
      />
    </Box>
  );
}
