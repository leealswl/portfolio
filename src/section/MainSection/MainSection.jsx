import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function MainSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const lines = [
    '안녕하세요',
    '웹의 작은 변화도 가치 있게 만드는',
    '프론트엔드 개발자, 이민지입니다.',
    '작은 변화도 의미 있게 만들고 싶습니다.',
    '방문해 주셔서 감사합니다.'
  ];

  const [visibleCount, setVisibleCount] = useState(2); // 처음 2줄
// visibleCount를 0.6초 간격 증가
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
        minHeight: '100vh',            
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
      {/* visibleCount만큼 텍스트를 순서대로 출력 */}
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
            @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(10px);
      }
      60% {
        transform: translateY(5px);
      }
    }
        `}
      </Box>
        {visibleCount >= lines.length && (
          <KeyboardArrowDownIcon
            sx={{
              position: 'absolute',
              bottom: isMobile ? '20px' : '40px',
              fontSize: isMobile ? '2.5rem' : '3rem',
              color: '#fff',
              animation: 'bounce 2s infinite',
              cursor: 'pointer',
            }}
            onClick={() => {
              const nextSection = document.getElementById('about');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        )}
    </Box>
  );
}