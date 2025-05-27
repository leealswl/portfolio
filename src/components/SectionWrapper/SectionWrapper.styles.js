import styled from 'styled-components';

export const Section = styled.section`
  /* 위아래 여백 (네비바 높이 + 여유) */
  padding: 100px 20px;
  /* 스크롤 이동 시 네비바가 가리지 않도록 보정 */
  scroll-margin-top: 80px;

  /* 중앙 정렬 & 최대 너비 */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  /* 태블릿 이하 (<=960px): 좌우 패딩 좁히고 콘텐츠 중앙 정렬 */
  @media (max-width: 960px) {
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;
  }

  /* 모바일 (<=600px): 네비바가 fixed 일 때 겹치지 않도록 위쪽 패딩 추가 */
  @media (max-width: 600px) {
    /* 예: 네비바 높이가 80px 이면, 기본 100px 대신 80px+20px 여유를 줄 수도 있고 */
    padding-top: 100px; /* 필요하다면 80px, 120px 등으로 조절 */
  }
`;