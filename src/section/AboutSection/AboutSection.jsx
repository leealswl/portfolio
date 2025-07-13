import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Divider, Chip} from '@mui/material';
import profilePic from '../../assets/images/minji.jpg';
import useFadeIn from '../../hooks/useFadeIn';
import './AboutSection.style.css'


export default function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const skills = ['HTML', 'CSS','JavaScript', 'React', 'Java'];

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
            사용자 경험을 고려하고 기능을 구현하는 프론트엔드 개발자, 이민지 입니다.
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              p: 0,
              '& li': { display: 'flex', alignItems: 'center', mb: 1 },
              
            }}
          >
            <li>비전공자 출신이지만 꾸준한 학습과 실습을 통해 HTML, CSS, JavaScript, React, Java 등의 기술을 익혔고,
            기획 - 디자인 - 개발 전 과정을 고려한 프로젝트를 경험해 왔습니다.
          </li>
          <li>
            IT 기업 두 곳에서 실무 경험을 쌓으며 웹페이지 제작, AI 데이터 구축 및 품질 관리 업무를 수행했습니다.<br />
            특히 솔트룩스에서는 인턴업무로 챗봇 UI를 개발하며 팀과의 협업을 경험했고,<br />
            인트플로우에서는 대규모 데이터 처리 및 관리 경험을 통해 꼼꼼함과 책임감을 키웠습니다.
          </li>
          <li>
            단순한 화면 구현을 넘어서 사용자 흐름에 맞춘 기능 설계와 구조화된 코드 작성에 집중하며<br />
            다양한 프로젝트를 통해 React 기반의 컴포넌트 구성과,
            그리고 반응형 UI 설계에 대한 이해도를 높였습니다.
            반복적이고 정밀한 작업이 요구되는 AI 데이터 품질관리 업무 경험을 통해<br />
            높은 집중력과 세밀한 업무 처리 능력도 갖추고 있습니다.
          </li>
          <li>감사합니다.
          </li>
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
