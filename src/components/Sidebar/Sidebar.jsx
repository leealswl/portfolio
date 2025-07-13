import React from 'react';
import { Box, Link } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import velogIcon from '../../assets/images/velog.png';

export default function Sidebar() {
  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        left: 16,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 65,
      }}
    >
      {/* GitHub 아이콘 */}
      <Link
        href="https://github.com/leealswl"
        target="_blank"
        rel="noopener"
        sx={{
          color: 'inherit',
          mb: 2,
          transition: 'transform 0.3s, color 0.3s',
          '&:hover': {
            color: '#fff',
            transform: 'scale(1.2)',
          },
        }}
      >
        <FaGithub size={28} color="#999999" />
      </Link>

      {/* Velog 아이콘 */}
      <Link
        href="https://velog.io/@alswl54321600/posts"
        target="_blank"
        rel="noopener"
        sx={{
          color: 'inherit',
          transition: 'transform 0.3s',
          '&:hover img': {
            filter: 'none',
            opacity: 1,
            transform: 'scale(1.2)',
          },
        }}
      >
        <Box
          component="img"
          src={velogIcon}
          alt="Velog"
          sx={{
            width: 28,
            height: 28,
            opacity: 0.7,
            filter: 'grayscale(100%)',
            transition: 'transform 0.3s, filter 0.3s, opacity 0.3s',
          }}
        />
      </Link>

      {/* 세로 라인 */}
      <Box
        sx={{
          flexGrow: 1,
          width: '2px',
          bgcolor: 'rgba(255,255,255,0.3)',
          mt: 1,
        }}
      />
    </Box>
  );
}
