import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

export default function MainSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const lines = [
    '안녕하세요',
    '프론트엔드 개발자 이민지입니다.',
    'React를 중심으로 사용자 친화적인 웹을 개발하고 있습니다.',
    '함께 성장할 수 있는 회사를 찾고 있습니다.',
    '방문해 주셔서 감사합니다.'
  ];

  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    if (visibleCount < lines.length) {
      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, lines.length]);

  return (
    <Box
      id="main"
      sx={{
        position: 'relative',
        width: '100%',              
        minHeight: '65vh',            
        backgroundColor: '#000',     
        color: '#fff',               
        display: 'flex',             
        flexDirection: 'column',    
        justifyContent: 'flex-start',    
        alignItems: 'center',        
        textAlign: 'center',
        pt: {
          xs: '80px',   
          sm: '100px',  
          md: '190px', 
        },
      }}
    >
      {lines.slice(0, visibleCount).map((text, i) => (
        <Typography
          key={i}
          component="p"
          sx={{
            fontSize: isMobile
              ? i < 2
                ? '8vw'
                : '4.5vw'
              : i < 2
              ? '3.5rem'
              : '1.75rem',
            fontWeight: i < 2 ? 'bold' : 'normal',
            mb: i === lines.length - 1 ? 0 : 1,
            textAlign: 'center',
            opacity: 0,
            animation: `fadeIn 0.5s forwards`,
            animationDelay: i < 2 ? '0s' : `${(i - 1) * 0.6}s`,
          }}
        >
          {text}
        </Typography>
      ))}
      <Box component="style">
        {`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </Box>
    </Box>
  );
}