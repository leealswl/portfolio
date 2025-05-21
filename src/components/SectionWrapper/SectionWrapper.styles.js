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

  /* (옵션) 각 섹션별 배경색 번갈아 적용 */
  /* &:nth-of-type(odd) { background: #0f1624; }
     &:nth-of-type(even) { background: #10172d; } */
`;
