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

import reportVideo from '../../assets/images/videos/hack.mp4';
import agentVideo from '../../assets/images/videos/final.mp4';


// ⭐⭐⭐ 이미지 4:3 비율 통일 스타일 (추가됨)
const projectImageStyle = (isMobile) => ({
  width: isMobile ? '100%' : '40%',
  height: isMobile ? 180 : 260,
  objectFit: 'cover',
  borderRadius: 2,
  cursor: 'pointer',
  aspectRatio: '4 / 3',
  backgroundColor: '#000',
  transition: 'transform .2s',
  '&:hover': { transform: 'scale(1.01)' },
});


// =======================
// 메인 프로젝트 데이터
// =======================
const mainProjects = [
  {
    title: '우리동네 리포트',
    img: new URL('../../assets/images/project-report.png', import.meta.url).href,
    tech: ['React', 'MUI', 'Tailwind CSS'],
    desc: `지역 주민들이 일상에서 발견한 불편 사항을 사진과 함께 신고하면,
    AI가 내용을 자동으로 분류·요약해 담당 부서로 빠르게 전달할 수 있도록 돕는 서비스입니다.
    사용자 흐름 설계, 신고 화면 UI, 지도 기반 위치 선택 기능 등을 구현했으며,
    핵심 문장 추출·카테고리 자동 분류 등 AI 기반 민원 처리 효율화를 목표로 개발했습니다.`,
    live: '',
    repo: '',
  },
  {
    title: '정부과제 컨설팅 AI AGENT',
    img: new URL('../../assets/images/image.png', import.meta.url).href,
    tech: ['React', 'React-Query', 'MUI', 'Spring Boot API', 'FastAPI (AI)'],
    desc: `정부지원사업 제안서를 자동으로 분석·검증하는 AI 기반 웹 서비스입니다.
    공고문·법령·평가기준을 분석하여 초안 문서를 자동 비교하고,
    부족한 항목·위험요소·보완 가이드를 시각화해 제공합니다.
    프론트엔드에서는 React 기반 대시보드, PDF 보고서 UI, 파일 업로드 흐름,
    Spring Boot 분석 API 및 FastAPI(RAG·LLM 모델)와의 연동을 구현했습니다.`,
    live: '',
    repo: 'https://github.com/leealswl/final',
  },
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
    img: new URL('../../assets/images/projects-newsapp.jpg', import.meta.url).href,
    tech: ['Javascript', 'Bootstrap', 'Netlify Functions', 'NewsAPI'],
    desc: 'NewsAPI를 활용해 최신뉴스를 카테고리별로 조회하고, 검색 및 페이지네이션을 지원하는 반응형 뉴스 앱입니다.',
    live: 'https://minji-newsapi-project.netlify.app/',
    repo: 'https://github.com/leealswl/new_api_project',
  },
];


// =======================
// 기타 프로젝트 데이터
// =======================
const otherProjects = [
  {
    title: 'H&M App',
    desc: '백엔드 없이 JSON Server로 구축한 더미 API를 활용해 실제 쇼핑몰처럼 상품 리스트 조회, 상세 페이지, 검색을 할 수 있는 웹 어플리케이션입니다.',
    url: 'https://new-hnm.netlify.app/',
    tech: ['React', 'React-Query', 'MUI', 'Netlify'],
    repo: 'https://github.com/jh-y10/NnBook',
  },
  {
    title: 'Game App',
    desc: 'RAWG game API 를 활용해 베스트게임 조회·검색·상세보기를 구현한 게임 플랫폼 프로젝트입니다.',
    url: 'https://game-plus-minus.netlify.app/',
    tech: ['Javascript', 'Bootstrap', 'Netlify'],
    repo: 'https://github.com/leealswl/Javascript3-team2',
  },
  {
    title: '포트폴리오',
    desc: 'React + MUI 기반 개인 포트폴리오 웹사이트입니다.',
    tech: ['React', 'MUI', 'Netlify'],
    url: 'https://minzportfolio.netlify.app/',
    repo: 'https://github.com/leealswl/portfolio',
  },
];


// =======================
// 모달 데이터
// =======================
const modalContentByTitle = {
  '📍 우리동네 리포트': {
    key: '우리동네 리포트',
    video: reportVideo, // ⭐ 영상 추가
    overview:
      '사용자가 동네에서 발견한 불편사항을 사진과 함께 신고하면, AI가 내용을 자동 분류·요약하여 담당 부서로 전달하도록 돕는 서비스입니다.',
    features: [
      '사진 기반 민원 신고',
      'AI 요약/카테고리 자동 분류',
      '지도 기반 위치 선택',
      '신고 상세 보기',
      '담당 부서 자동 추천',
    ],
    role: [
      '신고 UI 개발',
      'Kakao Maps 위치 선택 기능',
      'AI 결과 시각화 UI 개발',
      'UX 흐름 설계',
      '반응형 UI + 모달 구성',
    ],
    tech: ['React', 'MUI', 'Tailwind CSS', 'React Query', 'Kakao Maps JS', 'OpenAI API'],
    learned: [
      '실사용 시나리오 기반 UX 설계',
      '이미지 업로드/전처리 경험',
      '지도 기반 UI 경험',
      'AI 출력 UX 반영 경험',
    ],
    links: { repo: '', live: '' }
  },

  '🤖 정부과제 컨설팅 AI AGENT': {
    key: '정부과제 컨설팅 AI AGENT',
    video: agentVideo, // ⭐ 영상 추가
    overview:
      '정부지원사업 제안서를 자동 분석·검증하는 AI 기반 플랫폼입니다.',
    features: [
      '공고문 자동 파싱',
      '초안–공고 비교',
      '법령 RAG 검증',
      '평가기준 자가진단',
      '대시보드 시각화',
      'PDF 보고서 다운로드',
    ],
    role: [
      '대시보드 전체 UI 개발',
      'Spring Boot + FastAPI 연동',
      'React Query 데이터 흐름 구성',
      '분석 결과 시각화 컴포넌트 개발',
      '파일 업로드/저장 시스템 설계',
      'PDF export 기능 개발',
    ],
    tech: [
      'React', 'React Query', 'Zustand', 'MUI',
      'Spring Boot', 'FastAPI', 'LangGraph',
      'OpenAI API', 'Chroma DB', 'html2canvas', 'jsPDF'
    ],
    learned: [
      '대규모 분석 UI 설계 능력 향상',
      'Spring + FastAPI 멀티 백엔드 구조 이해',
      'RAG 검증 파이프라인 시각화 경험',
      'PDF 렌더링/보고서 구성 능력 강화',
    ],
    links: { repo: 'https://github.com/leealswl/final', live: '' },
  },

  '🎬 Movie App': {
    key: 'Movie App',
    overview: 'TMDB 영화 정보 제공 웹앱입니다.',
    features: ['인기/평점/예정작', '상세페이지', '트레일러', '장르 필터'],
    role: ['API 상태 관리', '상세 UI 개발', '검색/필터 개발'],
    tech: ['React', 'React Query', 'TMDB API', 'Bootstrap', 'Netlify'],
    learned: ['API 캐싱 구조 이해', 'UI 구성 능력 향상'],
    links: {
      repo: 'https://github.com/leealswl/movie-app',
      live: 'https://movie-appmovie-app.netlify.app/',
    }
  },

  '📰 News API': {
    key: 'News API',
    overview: '최신 뉴스 조회 웹앱입니다.',
    features: ['카테고리별 뉴스', '검색', '페이지네이션', '반응형 UI'],
    role: ['API 연동', '페이지네이션 개발', '서버리스 CORS 처리'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    learned: ['서버리스 보안 처리 경험'],
    links: {
      repo: 'https://github.com/leealswl/new_api_project',
      live: 'https://minzportfolio.netlify.app/',
    }
  },
};


// =======================
// 제목 → 모달 키 매핑
// =======================
const getEmojiTitleKey = (title) => {
  switch (title) {
    case '우리동네 리포트':
      return '📍 우리동네 리포트';
    case '정부과제 컨설팅 AI AGENT':
      return '🤖 정부과제 컨설팅 AI AGENT';
    case 'Movie App':
      return '🎬 Movie App';
    case 'News API':
      return '📰 News API';
    default:
      return null;
  }
};


// =======================
// 프로젝트 모달
// =======================
function ProjectModal({ open, onClose, project }) {
  if (!project) return null;

  const emojiTitleKey = getEmojiTitleKey(project.title);
  const content = modalContentByTitle[emojiTitleKey];

  if (!content) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{emojiTitleKey}</DialogTitle>

      <DialogContent dividers>

        {/* ⭐ 영상 영역 */}
        {content.video && (
          <div
            className="modal-section"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <video
              src={content.video}
              controls
              style={{
                width: "70%",
                maxWidth: "480px",
                borderRadius: "8px",
              }}
            />
          </div>
        )}
        <div className="modal-section">
          <h3><FaInfoCircle /> 프로젝트 개요</h3>
          <p>{content.overview}</p>
        </div>

        <div className="modal-section">
          <h3><FaStar /> 주요 기능</h3>
          <ul>
            {content.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>

        <div className="modal-section">
          <h3><FaUserCog /> 내 역할</h3>
          <ul>
            {content.role.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>

        <div className="modal-section">
          <h3><FaTools /> 기술 스택</h3>
          <div className="modal-chip-row">
            {content.tech.map((t) => <Chip key={t} label={t} variant="outlined" size="small" />)}
          </div>
        </div>

        {content.learned && (
          <div className="modal-section">
            <h3><FaLightbulb /> 배운 점</h3>
            <ul>
              {content.learned.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
        )}
      </DialogContent>

      <DialogActions>
        {content.links.repo && (
          <Button
            component={Link}
            href={content.links.repo}
            target="_blank"
          >
            <FaGithub /> GitHub
          </Button>
        )}
        {content.links.live && (
          <Button
            component={Link}
            href={content.links.live}
            target="_blank"
          >
            <FaExternalLinkAlt /> Live
          </Button>
        )}
        <Button onClick={onClose}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
}


// =======================
// 메인 컴포넌트
// =======================
export default function ProjectsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [titleRef, titleVisible] = useFadeIn(0.5);
  const [mainRef, mainVisible] = useFadeIn(0.2);
  const [otherRef] = useFadeIn(0.5);
  const [theotherRef, theotherVisible] = useFadeIn(0.5);

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
      {/* Title */}
      <Typography
        ref={titleRef}
        variant={isMobile ? 'h4' : 'h3'}
        sx={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 'bold',
          mb: 3,
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: '.5s',
        }}
      >
        PROJECTS
      </Typography>

      {/* 메인 프로젝트 */}
      <Box
        ref={mainRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          maxWidth: 1000,
          mx: 'auto',
          px: 2,
          opacity: mainVisible ? 1 : 0,
          transform: mainVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: '.5s',
        }}
      >
        {mainProjects.map((p) => (
          <Box
            key={p.title}
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 10,
            }}
          >

            {/* ⭐⭐⭐ 이미지 통일 적용됨 */}
            <Box
              component="img"
              src={p.img}
              alt={p.title}
              onClick={() => openModalFor(p)}
              sx={projectImageStyle(isMobile)}
            />

            <Box sx={{ p: 3, color: '#fff' }}>
              <Typography variant="h5">{p.title}</Typography>
              <Typography variant="body2" paragraph>{p.desc}</Typography>

              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                {p.repo && (
                  <Link href={p.repo} target="_blank" color="inherit">
                    <FaGithub size={30} />
                  </Link>
                )}

                {p.live && (
                  <Link href={p.live} target="_blank" color="inherit">
                    <FaExternalLinkAlt size={30} />
                  </Link>
                )}
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {p.tech.map((t) => (
                  <Typography
                    key={t}
                    variant="caption"
                    sx={{
                      px: 1,
                      py: .5,
                      border: '1px solid #fff',
                      borderRadius: 1,
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

      {/* Divider */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,.3)', my: 5 }} />

      {/* Other Projects */}
      <Typography
        ref={otherRef}
        variant="h4"
        sx={{
          color: '#fff',
          textAlign: 'center',
          mb: 4,
          opacity: theotherVisible ? 1 : 0,
          transform: theotherVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: '.3s',
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
          transition: '.3s',
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
              cursor: 'pointer',
              transition: '.2s',
              '&:hover': { transform: 'translateY(-2px)' },
            }}
          >
            <FaFolder size={24} />
            <Typography variant="subtitle1">{o.title}</Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>{o.desc}</Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {o.tech.map((t) => (
                <Typography
                  key={t}
                  variant="caption"
                  sx={{
                    px: 1,
                    py: .5,
                    border: '1px solid #fff',
                    borderRadius: 1,
                  }}
                >
                  {t}
                </Typography>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              {o.repo && (
                <Link
                  href={o.repo}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  color="inherit"
                >
                  <FaGithub />
                </Link>
              )}
              {o.url && (
                <Link
                  href={o.url}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  color="inherit"
                >
                  <FaExternalLinkAlt />
                </Link>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Modal */}
      <ProjectModal open={open} onClose={handleClose} project={selectedProject} />
    </SectionWrapper>
  );
}
