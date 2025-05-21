import React, { useState } from 'react';
import {Box,Typography,TextField,Button,useTheme,useMediaQuery} from '@mui/material';
import useFadeIn from '../../hooks/useFadeIn';
import SectionWrapper from '../../components/SectionWrapper';

export default function ContactSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [ref, isVisible] = useFadeIn(0.2);

  const handleSend = () => {
    const gmailUrl =
      'https://mail.google.com/mail/u/0/?' +
      'fs=1&tf=cm&source=mailto' +
      `&to=alswl54321600@gmail.com` +
      `&su=${encodeURIComponent('이메일 문의')}` +
      `&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;

    window.open(gmailUrl, '_blank', 'noopener');
  };

  return (
    <SectionWrapper
      id="contact"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: 4,
        pb: 8,
      }}
    >
      <Box
      ref={ref}
        sx={{
          width: isMobile ? '90%' : 600,
          mx: 'auto',   
          border: '1px solid #fff',
          borderRadius: 2,
          p: 4,
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="h2"
          gutterBottom
          sx={{ color: '#fff', fontWeight: 'bold', mb: 4 }}
        >
          Contact Me
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mb: 2,
          }}
        >
          <TextField
            label="Your Email"
            variant="outlined"
            size="small"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root fieldset': { borderColor: '#fff' },
              '& .MuiInputLabel-root': { color: '#fff' },
              '& .MuiInputBase-input': { color: '#fff' },
            }}
          />

          <TextField
            label="Message"
            variant="outlined"
            size="small"
            multiline
            minRows={4}
            value={message}
            onChange={e => setMessage(e.target.value)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root fieldset': { borderColor: '#fff' },
              '& .MuiInputLabel-root': { color: '#fff' },
              '& .MuiInputBase-input': { color: '#fff' },
            }}
          />

          <Button
            type="button" 
            onClick={handleSend}
            sx={{
              mt: 1,
              alignSelf: 'center',
              px: 4,
              backgroundColor: 'grey.500',
              color: '#fff',
              '&:hover': { backgroundColor: 'grey.700' },
            }}
          >
            메일 보내기
          </Button>
        </Box>
      </Box>
    </SectionWrapper>
  );
}
