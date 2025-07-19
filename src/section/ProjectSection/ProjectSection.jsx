import React from 'react';
import {Box,Typography,useTheme,useMediaQuery,Divider,Link} from '@mui/material';
import SectionWrapper from '../../components/SectionWrapper';
import { FaFolder, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import useFadeIn from '../../hooks/useFadeIn';
import './ProjectSection.style.css'

const mainProjects = [
  {
    title: 'Movie App',
    img: new URL('../../assets/images/projects-movieapp.jpg', import.meta.url).href,
    tech: ['React', 'React-Query','TMDB API',  'bootstrap', 'netlify' ],
    desc: `tmdb API를 활용해 인기순, 평점순, 상영 예정순으로 영화데이터를 보여줍니다.
    또한 포스터 클릭 시 해당 영화의 포스터·줄거리·출연진·트레일러·유사 영화 추천 등을 렌더링합니다.
    사용자가 선택한 장르를 기반으로 TMDB API에서 해당 장르의 영화 목록을 받아와 표시합니다.`,
    live: 'https://movie-appmovie-app.netlify.app/',
    repo: 'https://github.com/leealswl/new_api_project',
  },

  { 
    title: 'News App', 
    img: new URL('../../assets/images/projects-newsapp.jpg', import.meta.url).href,
    tech: [ 'Javascript','bootstrap',  'Netlify'],
    desc: 'newyork times API를 활용해 최신뉴스를 카테고리별로 조회할 수 있고, 검색 및 페이지네이션이 가능한 반응형 뉴스 웹 애플리케이션 입니다.', 
    live: 'https://minji-newsapi-project.netlify.app/',
    repo: 'https://github.com/leealswl/new_api_project', },
  {
    title: 'Library App',
    img: new URL('../../assets/images/projects-libraryapp.jpg', import.meta.url).href,
    tech: ['React','React-Query', 'Aladin API','bootstrap',  'netlify'],
    desc: 'Aladin API를 활용해 베스트셀러 조회·검색, 도서 상세 보기, 대여 기능을 구현한 React Query 기반 도서 앱입니다.',
    live: 'https://nn-book.vercel.app/',
    repo: 'https://github.com/leealswl/nnbooks',
  },
  
    { 
    title: 'Weather App',   
    img: new URL('../../assets/images/projects-weatherapp.jpg', import.meta.url).href,
    tech: ['React','React-Query','bootstrap',  'Netlify'],
    desc: 'OpenWeatherMap API 사용하여 현재 위치기반, 나라기반으로 실시간으로 날씨가 나오는 웹 애플리케이션입니다.', 
    live: 'https://weatherapp-weathapp.netlify.app/',
    repo: 'https://github.com/leealswl/weather-app',
   },
];

const otherProjects = [
  { title: 'H&M App',      
    desc: '백엔드 없이 JSON Server로 구축한 더미 API를 활용해 실제 쇼핑몰처럼 상품 리스트 조회, 상세 페이지, 검색을 할 수 있는 웹 어플리케이션입니다.',    
    url: 'https://new-hnm.netlify.app/',
    tech: ['React','React-Query','MUI','Netlify'],
    repo: 'https://github.com/jh-y10/NnBook', },
  { title: 'game app', //noonagame2 1234
  desc: 'news API를 활용해 최신뉴스를 카테고리별로 조회할 수 있고, 검색 및 페이지네이션이 가능한 반응형 뉴스 웹 애플리케이션 입니다.',         
  tech: ['Javascript','bootstrap', 'Netlify'],
  url: 'https://game-plus-minus.netlify.app/', 
  repo: 'https://github.com/leealswl/Javascript3-team2', 
 },
 { title: '포트폴리오' ,   
  desc: '지금까지 쌓아온 프론트엔드 기술 역량을 보여주고, 기술에 대한 학습을 위해 동적인 반응형 웹 프론트엔드 포트폴리오 페이지를 개발 중에 있습니다.', 
  tech: ['React','MUI','Netlify'],
  url: 'https://minzportfolio.netlify.app/',
  repo: 'https://github.com/leealswl/portfolio',
 },
];

export default function ProjectsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [titleRef,   titleVisible]   = useFadeIn(0.5);
  const [mainRef,    mainVisible]    = useFadeIn(0.2);
  const [otherRef]   = useFadeIn(0.5);
  const [theotherRef,   theotherVisible]   = useFadeIn(0.5);

  return (
    <SectionWrapper>
      <Typography
        ref={titleRef}
        variant={isMobile ? 'h4' : 'h3'}
        component="h2"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 'bold',
          mb: 3,
          pt: 0,
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        PROJECTS
      </Typography>

      <Box
        ref={mainRef}
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 4,
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: 1000, 
          mx: 'auto',  
          px: 2,  
          opacity: mainVisible ? 1 : 0,
          transform: mainVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        {mainProjects.map((p) => (
          <Box
            key={p.title}
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 10,
              mb: 8,             
              width: '100%',     
            }}
          >
            <Box
              component="img"
              src={p.img}
              alt={p.title}
              sx={{ width: isMobile ? '100%' : '40%', 
              height: isMobile ? 150 : 250, 
              objectFit: 'cover',
              borderRadius: 2, }}
            />
            <Box sx={{ p: 3, color: '#fff' }}>
              <Typography variant="h5" gutterBottom>{p.title}</Typography>
              <Typography variant="body2" paragraph>{p.desc}</Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Link href={p.repo} target="_blank" color="inherit"><FaGithub size={30}/></Link>
                <Link href={p.live} target="_blank" color="inherit"><FaExternalLinkAlt size={30} /></Link>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {p.tech.map((t) => (
                  <Typography
                    key={t}
                    variant="caption"
                    sx={{
                      px: 1,
                      py: 0.5,
                      border: '1px solid',
                      borderColor: '#fff',
                      borderRadius: 1,
                      fontSize: '0.75rem',
                    }}
                  >
                    {t}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', my: 3 }} />
      <Typography
        ref={otherRef}
        variant="h4"
        sx={{ color: '#fff', textAlign: 'center', mb: 4,
        opacity: theotherVisible ? 1 : 0,
        transform: theotherVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out', }}
      >
        Other Projects
      </Typography>
      <Box
        ref={theotherRef}
        sx={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
          gap: 3,
          opacity: theotherVisible ? 1 : 0,
          transform: theotherVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
        }}
      >
        {otherProjects.map((o) => (
          <Box
            key={o.title}
            sx={{
              background: '#111',
              p: 3,
              borderRadius: 2,
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              height: '100%',
            }}
          >
            <FaFolder size={24} />
            <Typography variant="subtitle1">{o.title}</Typography>
            <Typography variant="body2" sx={{ flex: 1, color: '#ccc' }}>
              {o.desc}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {o.tech.map((o) => (
                  <Typography
                    key={o}
                    variant="caption"
                    sx={{
                      px: 1,
                      py: 0.5,
                      border: '1px solid',
                      borderColor: '#fff',
                      borderRadius: 1,
                      fontSize: '0.75rem',
                    }}
                  >
                    {o}
                  </Typography>
                ))}
              </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <Link href={o.repo} target="_blank" color="inherit"><FaGithub /></Link>
              <Link href={o.url} target="_blank" color="inherit"><FaExternalLinkAlt /></Link>
            </Box>
          </Box>
        ))}
      </Box>
      </SectionWrapper>

  );
}
