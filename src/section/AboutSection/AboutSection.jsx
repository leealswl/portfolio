import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Divider, Chip} from '@mui/material';
import profilePic from '../../assets/images/profile.jpg';
import useFadeIn from '../../hooks/useFadeIn';
import './AboutSection.style.css'


export default function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const skills = ['HTML', 'CSS','JavaScript', 'React'];

  const [titleRef,   titleVisible]   = useFadeIn(0.5);
  const [mainRef,    mainVisible]    = useFadeIn(0.2);
  return (
    <>
      <Typography
        ref={titleRef}
        variant={isMobile ? 'h4' : 'h3'}
        component="h2"
        gutterBottom
        className="about-main"
        sx={{
          textAlign: 'center',    
          mb: 4,                  
          fontWeight: 'bold',
          color:'#fff,',
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        ABOUT
      </Typography>
      <Box
        ref={mainRef}
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width:'100%',
          gap: 10,
          mb: 0, 
          pt: 0, 
          pb: 0, 
          maxWidth:1000,
          mx:'auto',
          opacity: mainVisible ? 1 : 0,
          transform: mainVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <Box
          component="img"
          src={profilePic}
          alt="Profile"
          sx={{
            width: isMobile ? 200 : 300,
            height: isMobile ? 200 : 300,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />

        <Box sx={{ flex: 1, color: '#fff', textAlign: isMobile ? 'center' : 'left' }}>
          <Typography variant="body1" paragraph 
            sx={{
              fontSize: isMobile ? '1rem' : '1.125rem',
              lineHeight: 1.6,
            }}
          >
            안녕하세요. 프론트엔드 개발자 이민지입니다.
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              p: 0,
              '& li': { display: 'flex', alignItems: 'center', mb: 1 },
              
            }}
          >
            <li>부트캠프 과정을 통해 HTML, CSS, JavaScript의 기본기를 익히고 다양한 실무 프로젝트 경험을 쌓았습니다. 
            이후 IT 회사에서 챗봇 및 웹페이지 개발에 참여하며 실제 서비스 개발과 협업 방식을 배울 수 있었습니다. </li>
            <li>또한, 회사 생활을 통해 프로젝트의 전반적인 흐름과 업무 프로세스를 경험하며 협업 및 커뮤니케이션 역량을 키웠고,
                현재는 프론트엔드 개발자로서 새롭게 도전하기 위해 포트폴리오를 준비하며 여러 프로젝트를 진행하고 있습니다. 
              사용자의 작은 문제 하나라도 꼼꼼하게 고민하고, 이를 끝까지 해결하는 개발자가 되기 위해 노력하고 있습니다.
            이러한 저의 가능성과 열정을 믿고 함께 성장할 수 있는 회사를 찾고 있습니다.</li>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', my: 4 }} />
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start',
              gap: 2,
            }}
          >
            {skills.map(skill => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                sx={{
                  borderColor: '#fff',
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
