import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { FaArrowUp } from 'react-icons/fa';

export default function TopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;

  return (
    <Fab
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
      size="small"
      color="#999999"
      aria-label="scroll to top"
    >
      <FaArrowUp />
    </Fab>
  );
}
