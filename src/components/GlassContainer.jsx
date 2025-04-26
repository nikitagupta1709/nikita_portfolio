// src/components/GlassContainer.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GlassContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 2rem;
  margin: 2rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
`;

export default GlassContainer;
