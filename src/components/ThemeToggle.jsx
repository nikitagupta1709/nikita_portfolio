// src/components/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleWrapper = styled(motion.div)`
  position: fixed;
  top: 1.2rem;
  right: 1.5rem;
  z-index: 100;
  cursor: pointer;
  background: ${({ theme }) => theme.toggleBorder};
  padding: 0.6rem;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: background 0.3s ease;
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <ToggleWrapper
      onClick={toggleTheme}
      whileTap={{ scale: 0.85, rotate: 15 }}
    >
      {isDark ? (
        <FaSun size={20} color="#FFD700" />
      ) : (
        <FaMoon size={20} color="#333" />
      )}
    </ToggleWrapper>
  );
};

export default ThemeToggle;
