import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import { FaGithub, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaDatabase } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const techIcons = {
  "Node.js": <FaNodeJs />,
  "Express.js": <FaDatabase />,
  "MongoDB": <FaDatabase />,
  Mongoose: <FaDatabase />,
  Nodemailer: null,
  JWT: null,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  React: <FaReact />,
};

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.body};
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.text}22;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text + "cc"};
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tech = styled(motion.span)`
  background: ${({ theme }) => theme.primary}22;
  color: ${({ theme }) => theme.primary};
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  user-select: none;
  cursor: default;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    svg {
      color: ${({ theme }) => theme.body};
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.primary};
    font-size: 1.7rem;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primaryDark || theme.text};
      transform: scale(1.2) rotate(8deg);
    }
  }
`;
const ProjectCard = ({ project, index }) => {
  // Hooks are inside this component - no violation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <Card
      key={index}
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX);
        y.set(posY);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      tabIndex={0}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.96 }}
      transition={{ delay: index * 0.25, duration: 0.6 }}
    >
      <ImageContainer>
        <Image
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4 }}
        />
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <TechStack>
          {project.techStack.map((tech, idx) => (
            <Tech
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 + 0.3, duration: 0.3 }}
              whileHover={{ scale: 1.15, color: "#fff", backgroundColor: "var(--primary)" }}
            >
              {techIcons[tech] && techIcons[tech]}
              {tech}
            </Tech>
          ))}
        </TechStack>
        <Links>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
              <FaGithub />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
              <FiExternalLink />
            </a>
          )}
        </Links>
      </Content>
    </Card>
  );
};

export default ProjectCard;
