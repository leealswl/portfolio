import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Divider, Chip } from '@mui/material';
import profilePic from '../../assets/images/minji.jpg';
import useFadeIn from '../../hooks/useFadeIn';
import './AboutSection.style.css';

export default function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const skills = [
  //   'HTML',
  //   'CSS',
  //   'JavaScript',
  //   'React',
  //   'Java',
  //   'Spring Boot',
  //   'FastAPI'
  // ];

  const [titleRef, titleVisible] = useFadeIn(0.5);
  const [mainRef, mainVisible] = useFadeIn(0.2);

  return (
    <>
      {/* ABOUT TITLE */}
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
          color: '#fff',
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        ABOUT
      </Typography>

      {/* CONTENT WRAPPER */}
      <Box
        ref={mainRef}
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: 10,
          maxWidth: 1000,
          mx: 'auto',
          opacity: mainVisible ? 1 : 0,
          transform: mainVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        {/* PROFILE IMAGE */}
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

        {/* TEXT SECTION */}
        <Box
          sx={{
            flex: 1,
            color: '#fff',
            textAlign: isMobile ? 'center' : 'left'
          }}
        >
          {/* INTRO */}
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: isMobile ? '1rem' : '1.125rem',
              lineHeight: 1.6,
            }}
          >
            사용자 경험을 중심으로 기능을 설계하고 구현하는 프론트엔드 개발자 이민지입니다.
          </Typography>

          {/* BULLET LIST */}
          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              p: 0,
              '& li': { mb: 2, lineHeight: 1.6 }
            }}
          >
            <li>
              React 기반의 웹 UI 개발을 중심으로, Spring Boot와의 REST API 연동,
              FastAPI 기반 AI 서비스 연동 경험을 통해 웹 서비스 전반의 흐름을 이해하는 개발자로 성장하고 있습니다.
            </li>

            <li>
              비전공자로 시작했지만 꾸준한 학습과 실습을 통해
              HTML, CSS, JavaScript, React, Java 등 웹 전반의 기술을 익혔고,
              화면 설계부터 컴포넌트 구성, API 연동까지 프로젝트 전 과정을 직접 수행해왔습니다.
            </li>

            <li>
              두 곳의 IT 기업에서 웹페이지 제작, AI 데이터 구축, 품질관리 등의 실무 경험을 쌓았습니다.
              솔트룩스에서는 챗봇 UI 개발 인턴으로 협업 기반의 UI 제작을 경험했고,
              인트플로우에서는 대규모 데이터 처리 및 운영 경험을 통해 정확성과 문제 해결 능력을 키웠습니다.
            </li>

            <li>
              최근에는 백엔드 API와 AI 기반 분석 기능을 프론트엔드와 연동하는 실전 경험을 통해
              엔드 투 엔드 개발 역량을 확장하고 있습니다.
            </li>

            <li>
              앞으로도 더 나은 사용자 경험과 안정적인 기능 구현을 위해 지속적으로 성장하겠습니다.
              감사합니다.
            </li>
          </Box>

          {/* DIVIDER */}
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', my: 4 }} />

          {/* SKILL CHIPS */}
          {/* <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start',
              gap: 2,
            }}
          >
            {skills.map((skill) => (
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
          </Box> */}
        </Box>
      </Box>
    </>
  );
}
