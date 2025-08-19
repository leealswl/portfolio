import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
} from '@mui/material';
import SectionWrapper from '../../components/SectionWrapper';
import {
  FaFolder,
  FaExternalLinkAlt,
  FaGithub,
  FaInfoCircle,
  FaStar,
  FaUserCog,
  FaTools,
  FaLightbulb,
} from 'react-icons/fa';
import useFadeIn from '../../hooks/useFadeIn';
import './ProjectSection.style.css';

const mainProjects = [
  {
    title: 'Movie App',
    img: new URL('../../assets/images/projects-movieapp.jpg', import.meta.url).href,
    tech: ['React', 'React-Query', 'TMDB API', 'Bootstrap', 'Netlify'],
    desc: `tmdb API를 활용해 인기순, 평점순, 상영 예정순으로 영화데이터를 보여줍니다.
    또한 포스터 클릭 시 해당 영화의 포스터·줄거리·출연진·트레일러·유사 영화 추천 등을 렌더링합니다.
    사용자가 선택한 장르를 기반으로 TMDB API에서 해당 장르의 영화 목록을 받아와 표시합니다.`,
    live: 'https://movie-appmovie-app.netlify.app/',
    repo: 'https://github.com/leealswl/movie-app',
  },
  {
    title: 'News API',
    img: new URL('../../assets/images/projects-newsapp.jpg', import.meta.url).href, // 뉴스앱 썸네일
    tech: ['Javascript', 'Bootstrap', 'Netlify Functions', 'NewsAPI'],
    desc: 'NewsAPI를 활용해 최신뉴스를 카테고리별로 조회하고, 검색 및 페이지네이션을 지원하는 반응형 뉴스 앱입니다.',
    live: 'https://minji-newsapi-project.netlify.app/',
    repo: 'https://github.com/leealswl/new_api_project',
  },
  {
    title: 'Weather App',
    img: new URL('../../assets/images/projects-weatherapp.jpg', import.meta.url).href,
    tech: ['React', 'React-Query', 'Bootstrap', 'Netlify'],
    desc: 'OpenWeatherMap API 사용하여 현재 위치/나라 기반으로 실시간 날씨를 보여주는 웹 애플리케이션입니다.',
    live: 'https://weatherapp-weathapp.netlify.app/',
    repo: 'https://github.com/leealswl/weather-app',
  },
];

const otherProjects = [
  {
    title: 'H&M App',
    desc: '백엔드 없이 JSON Server로 구축한 더미 API를 활용해 실제 쇼핑몰처럼 상품 리스트 조회, 상세 페이지, 검색을 할 수 있는 웹 어플리케이션입니다.',
    url: 'https://new-hnm.netlify.app/',
    tech: ['React', 'React-Query', 'MUI', 'Netlify'],
    repo: 'https://github.com/jh-y10/NnBook',
  },
  {
    title: 'Game App', // Other Projects
    desc: 'RAWG game API 를 활용해 베스트게임 조회·검색·상세보기를 구현한 게임 플랫폼 프로젝트입니다. (팀 프로젝트)',
    url: 'https://game-plus-minus.netlify.app/',
    tech: ['Javascript', 'Bootstrap', 'Netlify'],
    repo: 'https://github.com/leealswl/Javascript3-team2',
  },
  {
    title: '포트폴리오',
    desc: '지금까지 쌓아온 프론트엔드 역량을 보여주는 반응형 포트폴리오입니다.. 섹션 애니메이션, 프로젝트 모달, 배포 자동화 등을 포함합니다.',
    tech: ['React', 'MUI', 'Netlify'],
    url: 'https://minzportfolio.netlify.app/',
    repo: 'https://github.com/leealswl/portfolio',
  },
];

/** 모달 내용(아이콘 + 텍스트) */
const modalContentByTitle = {
  // 메인 3개
  '🎬 Movie App': {
    key: 'Movie App',
    overview:
      'TMDB API를 활용해 영화 정보를 제공하는 React 기반 웹 애플리케이션입니다. 인기 영화, 평점순, 상영 예정작 등 다양한 조건으로 영화를 조회할 수 있으며, 각 영화의 상세 페이지에서는 포스터, 줄거리, 출연진, 예고편 영상, 유사 영화 추천까지 확인할 수 있습니다.',
    features: [
      '인기순, 평점순, 상영 예정작 영화 목록 제공',
      '포스터 클릭 시 상세 페이지 → 줄거리, 출연진, 트레일러, 영화 리뷰, 유사 영화 추천',
      '장르별 영화 필터링 및 검색 기능',
      '반응형 UI 지원',
    ],
    role: [
      'React Query로 API 연동 및 데이터 상태 관리 (로딩·에러 처리 포함)',
      '상세 모달/페이지 UI 구현 및 사용자 경험 개선',
      '검색·필터링 로직 작성',
    ],
    tech: ['React', 'React Query', 'TMDB API', 'Bootstrap', 'Netlify'],
    links: {
      repo: 'https://github.com/leealswl/movie-app',
      live: 'https://movie-appmovie-app.netlify.app/',
    },
  },
  '📰 News API': {
    key: 'News API',
    overview:
      'NewsAPI를 활용해 최신 뉴스를 조회할 수 있는 웹 애플리케이션입니다. 카테고리별/키워드별 검색, 페이지네이션 기능을 지원하며 Netlify Functions로 배포 시 CORS 이슈를 해결했습니다.',
    features: [
      '카테고리별 뉴스 조회 (정치, 경제, 스포츠 등)',
      '키워드 검색 지원',
      '뉴스 목록 페이지네이션',
      '기사 클릭 시 원문 링크로 이동',
      '모바일 대응(반응형 UI)',
    ],
    role: [
      'NewsAPI 연동 및 데이터 렌더링 구현',
      '페이지네이션 로직 설계 및 구현',
      '카테고리 메뉴 / 검색 기능 UI 구성',
      'Netlify Functions로 서버리스 배포 및 CORS 에러 우회 처리',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'NewsAPI', 'Serverless Functions'],
    links: {
      repo: 'https://github.com/leealswl/new_api_project',
      live: 'https://minji-newsapi-project.netlify.app/',
    },
  },
  '☁️ Weather App': {
    key: 'Weather App',
    overview:
      'OpenWeatherMap API 기반 실시간 날씨 앱입니다. 현재 위치/국가·도시별 검색을 지원하는 반응형 웹 애플리케이션입니다.',
    features: ['현재 위치 기반 날씨', '도시/국가 검색', '온도·습도·체감온도 등 상세 표시', '반응형 UI'],
    role: ['React로 UI 개발', 'React Query로 데이터/로딩/에러 상태 관리', 'API 응답 데이터 매핑 및 단위 변환'],
    tech: ['React', 'React Query', 'OpenWeatherMap API', 'Bootstrap', 'Netlify'],
    links: {
      repo: 'https://github.com/leealswl/weather-app',
      live: 'https://weatherapp-weathapp.netlify.app/',
    },
  },

  // Other Projects 3개
  '🛍 H&M App': {
    key: 'H&M App',
    overview:
      'JSON Server로 만든 더미 API를 사용해 쇼핑몰의 핵심 흐름(리스트 → 상세 → 검색)을 구현한 프론트엔드 앱입니다.',
    features: ['상품 리스트/상세', '이름/키워드 검색', '반응형 UI', '더미 API(JSON Server) 연동'],
    role: ['컴포넌트 구조 설계', '리스트/검색/상세 화면 개발', 'MUI 기반 UI 구축', '배포 설정(Netlify)'],
    tech: ['React', 'React Query', 'MUI', 'JSON Server', 'Netlify'],
    links: {
      repo: 'https://github.com/jh-y10/NnBook',
      live: 'https://new-hnm.netlify.app/',
    },
  },
  '🎮 Game App': {
    key: 'Game App',
    overview:
      'RAWG 게임 API를 사용하여 인기 게임 목록, 검색, 상세 보기를 제공하는 팀 프로젝트입니다.',
    features: ['인기 게임 목록', '검색/필터', '게임 상세(설명·이미지 등)', '반응형 레이아웃'],
    role: [
      '팀 프로젝트로 카드 UI/목록-상세 흐름 구현에 기여',
      'API 연동 및 데이터 렌더링',
      '레이아웃/반응형 스타일 작업',
    ],
    tech: ['JavaScript', 'Bootstrap', 'RAWG API', 'Netlify'],
    links: {
      repo: 'https://github.com/leealswl/Javascript3-team2',
      live: 'https://game-plus-minus.netlify.app/',
    },
  },
  '🗂 포트폴리오': {
    key: '포트폴리오',
    overview:
      'React + MUI 기반 개인 포트폴리오입니다. 지금까지 배운내용을 녹여낸 프로젝트입니다.',
    features: ['섹션 네비게이션', '페이드인 애니메이션', '프로젝트 모달', '반응형 UI', '배포 자동화'],
    role: ['전체 설계 및 개발', '애니메이션/모달 UX 구현', 'Netlify 배포/환경 구성'],
    tech: ['React', 'MUI', 'Netlify'],
    links: {
      repo: 'https://github.com/leealswl/portfolio',
      live: 'https://minzportfolio.netlify.app/',
    },
  },
};

// 타이틀 → 이모지 포함 키로 매핑
const getEmojiTitleKey = (title) => {
  switch (title) {
    case 'Movie App':
      return '🎬 Movie App';
    case 'News API':
      return '📰 News API';
    case 'Weather App':
      return '☁️ Weather App';
    case 'H&M App':
      return '🛍 H&M App';
    case 'Game App':
      return '🎮 Game App';
    case '포트폴리오':
      return '🗂 포트폴리오';
    default:
      return null;
  }
};

function ProjectModal({ open, onClose, project }) {
  if (!project) return null;

  const emojiTitleKey = getEmojiTitleKey(project.title);
  const content = emojiTitleKey ? modalContentByTitle[emojiTitleKey] : null;
  if (!content) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: 700 }}>{emojiTitleKey}</DialogTitle>

      <DialogContent dividers>
        {/* 프로젝트 개요 */}
        <div className="modal-section">
          <h3>
            <FaInfoCircle /> 프로젝트 개요
          </h3>
          <p className="modal-paragraph">{content.overview}</p>
        </div>

        {/* 주요 기능 */}
        <div className="modal-section">
          <h3>
            <FaStar /> 주요 기능
          </h3>
          <ul className="modal-list">
            {content.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* 내 역할 */}
        <div className="modal-section">
          <h3>
            <FaUserCog /> 내 역할
          </h3>
          <ul className="modal-list">
            {content.role.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        {/* 기술 스택 */}
        <div className="modal-section">
          <h3>
            <FaTools /> 기술 스택
          </h3>
          <div className="modal-chip-row">
            {content.tech.map((t) => (
              <Chip key={t} label={t} size="small" variant="outlined" />
            ))}
          </div>
        </div>

        {/* 배운 점 (있는 프로젝트만 노출) */}
        {['Movie App', 'News API', 'Weather App'].includes(content.key) && (
          <div className="modal-section">
            <h3>
              <FaLightbulb /> 배운 점
            </h3>
            <ul className="modal-list">
              {content.key === 'Movie App' && (
                <>
                  <li>React Query 기반 API 상태 관리 및 캐싱 경험</li>
                  <li>외부 API 데이터를 구조화해 UI에 반영하는 과정 학습</li>
                  <li>모달 기반 UI/UX 설계 및 사용자 경험 향상</li>
                </>
              )}
              {content.key === 'News API' && (
                <>
                  <li>외부 API 연동 시 CORS 문제를 서버리스 함수로 해결</li>
                  <li>페이지네이션 로직 설계를 통해 데이터 UI 최적화</li>
                  <li>배포 환경에서의 API Key 관리 및 보안 고려</li>
                </>
              )}
              {content.key === 'Weather App' && (
                <>
                  <li>위치 기반 데이터 처리 및 로딩/에러 상태 관리</li>
                  <li>반응형 UI와 날씨 데이터 매핑(단위 변환) 최적화</li>
                </>
              )}
            </ul>
          </div>
        )}
      </DialogContent>

      <DialogActions>
        <Button
          component={Link}
          href={content.links?.repo || project.repo}
          target="_blank"
          rel="noopener"
          sx={{ textTransform: 'none' }}
        >
          <FaGithub style={{ marginRight: 6 }} />
          GitHub
        </Button>
        <Button
          component={Link}
          href={content.links?.live || content.links?.url || project.live || project.url}
          target="_blank"
          rel="noopener"
          sx={{ textTransform: 'none' }}
        >
          <FaExternalLinkAlt style={{ marginRight: 6 }} />
          Live
        </Button>
        <Button onClick={onClose}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
}

export default function ProjectsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [titleRef, titleVisible] = useFadeIn(0.5);
  const [mainRef, mainVisible] = useFadeIn(0.2);
  const [otherRef] = useFadeIn(0.5);
  const [theotherRef, theotherVisible] = useFadeIn(0.5);

  // 모달 상태
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const openModalFor = (project) => {
    const key = getEmojiTitleKey(project.title);
    if (key && modalContentByTitle[key]) {
      setSelectedProject(project);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

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

      {/* 메인 프로젝트 */}
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
              onClick={() => openModalFor(p)}
              sx={{
                width: isMobile ? '100%' : '40%',
                height: isMobile ? 150 : 250,
                objectFit: 'cover',
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'transform .2s ease',
                '&:hover': { transform: 'scale(1.01)' },
              }}
            />
            <Box sx={{ p: 3, color: '#fff' }}>
              <Typography variant="h5" gutterBottom>
                {p.title}
              </Typography>
              <Typography variant="body2" paragraph>
                {p.desc}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Link href={p.repo} target="_blank" color="inherit">
                  <FaGithub size={30} />
                </Link>
                <Link href={p.live} target="_blank" color="inherit">
                  <FaExternalLinkAlt size={30} />
                </Link>
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

      {/* Other Projects */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', my: 3 }} />
      <Typography
        ref={otherRef}
        variant="h4"
        sx={{
          color: '#fff',
          textAlign: 'center',
          mb: 4,
          opacity: theotherVisible ? 1 : 0,
          transform: theotherVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
        }}
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
            onClick={() => openModalFor(o)}
            sx={{
              background: '#111',
              p: 3,
              borderRadius: 2,
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              height: '100%',
              cursor: 'pointer',
              transition: 'transform .2s ease',
              '&:hover': { transform: 'translateY(-2px)' },
            }}
          >
            <FaFolder size={24} />
            <Typography variant="subtitle1">{o.title}</Typography>
            <Typography variant="body2" sx={{ flex: 1, color: '#ccc' }}>
              {o.desc}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {o.tech.map((tech) => (
                <Typography
                  key={tech}
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
                  {tech}
                </Typography>
              ))}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              {o.repo && (
                <Link
                  href={o.repo}
                  target="_blank"
                  color="inherit"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                </Link>
              )}
              {(o.url) && (
                <Link
                  href={o.url}
                  target="_blank"
                  color="inherit"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt />
                </Link>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* 공통 모달 */}
      <ProjectModal open={open} onClose={handleClose} project={selectedProject} />
    </SectionWrapper>
  );
}
