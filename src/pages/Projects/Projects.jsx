import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../utils/project";

// Styled Components

const Container = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1rem;
`;

const Timeline = styled.ul`
  position: relative;
  margin-left: 30px; /* Add extra space so dot won't overlap text */
  padding-left: 20px;
  border-left: 3px solid #6e8efb;
`;

const TimelineItem = styled.li`
  position: relative;
  margin-bottom: 2.5rem;
  cursor: pointer;
  padding-left: 20px; /* Push text rightward more */

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: -32px; /* Move dot left */
    top: 5px;
    width: 16px;
    height: 16px;
      background: linear-gradient(135deg, #6e8efb, #a777e3);
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 2px #6e8efb;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const ToggleIcon = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
`;

const ProjectDetails = styled(motion.div)`
  margin-top: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  color: #34495e;
  font-size: 0.95rem;
`;

const TechList = styled.ul`
  margin: 0.5rem 0 1rem;
  padding-left: 1.2rem;
  list-style: disc inside;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const TechItem = styled.li`
  background: #6e8efb;
  color: white;
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
  font-size: 0.85rem;
`;

const Links = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  a {
    color: #6e8efb;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s ease;

    &:hover {
      border-bottom: 1px solid #3498db;
    }
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  margin-top: 1rem;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
`;

// Motion Variants
const detailsVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
        opacity: 1,
        height: "auto",
        overflow: "visible",
        transition: { duration: 0.4, ease: "easeInOut" },
    },
};

const Projects = () => {
    const [openIndex, setOpenIndex] = useState(0); // <-- Default first open

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Container>
            <Timeline>
                {projects.map((project, index) => (
                    <TimelineItem key={index} onClick={() => toggleOpen(index)}>
                        <ProjectTitle>
                            {project.title}
                            <ToggleIcon open={openIndex === index}>+</ToggleIcon>
                        </ProjectTitle>
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <ProjectDetails
                                    key="content"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={detailsVariants}
                                >
                                    <p>{project.description}</p>

                                    <strong>Tech Stack:</strong>
                                    <TechList>
                                        {project.techStack.map((tech, i) => (
                                            <TechItem key={i}>{tech}</TechItem>
                                        ))}
                                    </TechList>

                                    <Links>
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer">
                                                GitHub
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noreferrer">
                                                Live Demo
                                            </a>
                                        )}
                                    </Links>

                                    {project.image && <ProjectImage src={project.image} alt={project.title} />}
                                </ProjectDetails>
                            )}
                        </AnimatePresence>
                    </TimelineItem>
                ))}
            </Timeline>
        </Container>
    );
};

export default Projects;
