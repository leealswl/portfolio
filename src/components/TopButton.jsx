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
      size="small"
      aria-label="scroll to top"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
        color: '#000', // 아이콘 색상
        backgroundColor: '#999999', // 배경 회색
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#fff',  // 배경 흰색으로 반전
          color: '#000',            // 아이콘 검정 유지
        },
      }}
    >
      <FaArrowUp />
    </Fab>
  );
}
