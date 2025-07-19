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
        minHeight: '100vh',            
        backgroundColor: '#000',     
        color: '#fff',               
        display: 'flex',             
        flexDirection: 'column',    
        justifyContent: 'center',
        alignItems: 'center',        
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* 배경 */}
      <Typography
        component="div"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: { xs: '18vw', sm: '16vw', md: '15vw' },
          fontWeight: 'bold',
          color: 'rgba(100, 100, 100, 0.3)',
          zIndex: 1, //뒤에 위치
          animation: 'zoomOutEffect 1.5s ease-out forwards',
          userSelect: 'none',
        }}
      >
        Front End
      </Typography>

      {/* 기존 */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        {lines.map((text, i) => (
          <Typography
            key={i}
            component="p"
            sx={{
              visibility: i < visibleCount ? 'visible' : 'hidden',
              animation: i < visibleCount ? `fadeIn 0.5s forwards` : 'none',
              animationDelay: i < 2 ? '0s' : `${(i - 1) * 0.6}s`,
            
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
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>

      {/* 배경 애니매이션 */}
      <Box component="style">
        {`
          @keyframes zoomOutEffect {
            from {
              opacity: 0;
              transform: translate(-50%, -50%) scale(1.5);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
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
              zIndex: 2, 
            }}
            onClick={() => {
              const nextSection = document.getElementById('about');
              if (nextSection) {
                const y = nextSection.getBoundingClientRect().top + window.pageYOffset - 10;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          />
        )}
    </Box>
  );
}