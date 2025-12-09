import React from "react";
import { Box, Typography, Chip, useTheme, useMediaQuery } from "@mui/material";

export default function SkillsPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const frontend = [
        "HTML", "CSS", "JavaScript", "React", "MUI",
        "Zustand", "React Query", "Axios"
    ];

    const backend = [
        "Java", "Spring Boot (API 연동)", "FastAPI (AI 연동)"
    ];

    const ai = [
        "Python", "OpenAI API", "RAG 개념", "Embedding Search"
    ];

    const tools = [
        "Git", "GitHub", "Figma", "VS Code", "Netlify", "Vercel"
    ];

    return (
        <Box
        sx={{
            width: "100%",
            minHeight: "100vh",
            bgcolor: "#0f0f0f",
            py: 8,
        }}
        >
        <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 6,
            color: "#fff",
            }}
        >
            SKILLS
        </Typography>

        <Box
            sx={{
            display: "grid",
            gap: 4,
            maxWidth: 1100,
            mx: "auto",
            px: 2,
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            }}
        >
            <SkillCard title="Frontend" items={frontend} />
            <SkillCard title="Backend / API Integration" items={backend} />
            <SkillCard title="AI / Data" items={ai} />
            <SkillCard title="Tools" items={tools} />
        </Box>
        </Box>
    );
}

/* ✨ Glassmorphism SkillCard Component */
function SkillCard({ title, items }) {
    return (
        <Box
        sx={{
            p: 3,
            borderRadius: "16px",
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            transition: "0.3s",
            "&:hover": {
            background: "rgba(255,255,255,0.07)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }
        }}
        >
        <Typography
            variant="h6"
            sx={{ color: "#fff", mb: 2, fontWeight: 600 }}
        >
            {title}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2 }}>
            {items.map((skill) => (
            <Chip
                key={skill}
                label={skill}
                sx={{
                bgcolor: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                "&:hover": {
                    bgcolor: "rgba(255,255,255,0.25)",
                },
                }}
            />
            ))}
        </Box>
        </Box>
    );
}
