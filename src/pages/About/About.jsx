// src/pages/About.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  color: ${(props) => props.theme.text};
`;


const AboutText = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  color: ${(props) => props.theme.text};
`;

const TimelineContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  padding: 2rem 0;
  scroll-behavior: smooth;
  
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6e8efb;
    border-radius: 4px;
  }
`;

const TimelineTrack = styled.div`
  width:100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TimelineCard = styled(motion.div)`
  background: ${(props) => props.theme.body};
  border: 2px solid #6e8efb;
  border-radius: 1rem;
  padding: 1.5rem;
  min-width: 250px;
  max-width: 300px;
  flex-shrink: 0;
  text-align: center;
  word-wrap: break-word;
  white-space: normal; /* Allow text to wrap */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.text};
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.text};
  }
`;

const HobbiesWrapper = styled(motion.div)`
  margin-top: 3rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.text};
    margin-bottom: 1.5rem;
  }
`;

const HobbyGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const HobbyTag = styled(motion.div)`
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: ${(props) => props.bgColor || "#6e8efb"};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  cursor: default;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;


const About = () => {
    return (
        <Wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <SectionTitle
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </SectionTitle>

            <AboutText
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Full-Stack Developer (SDE2) with 2+ years of experience building scalable, secure applications.
                Skilled in React.js, Node.js, and MongoDB for B2B/B2C platforms. Leading feature development,
                system design, and mentoring juniors. Passionate about building clean architectures and scalable solutions.
            </AboutText>

            <SectionTitle>Education</SectionTitle>

            <TimelineContainer>
                <TimelineTrack>
                    <TimelineCard
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3> Masai School (NOLAN EDUTECH)</h3>
                        <p>Full Stack Web Development Program</p>
                        <p>Aug 2022 - Jan 2023</p>
                    </TimelineCard>

                    <TimelineCard
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3>Bundelkhand University</h3>
                        <p>B.Tech in Computer Science</p>
                        <p>July 2018 - Aug 2022</p>
                        <p>CGPA: 8.12</p>
                    </TimelineCard>

                    {/* Add more cards if needed */}
                </TimelineTrack>
            </TimelineContainer>

            <HobbiesWrapper
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2>Hobbies</h2>

                <HobbyGrid>
                    <HobbyTag bgColor="#6e8efb">Dance</HobbyTag>
                    <HobbyTag bgColor="#f6a5c0">Sports</HobbyTag>
                    <HobbyTag bgColor="#ffb347">Cooking</HobbyTag>
                    <HobbyTag bgColor="#90ee90">Acting</HobbyTag>
                    {/* Add more hobbies if you want */}
                </HobbyGrid>
            </HobbiesWrapper>

        </Wrapper>
    );
};

export default About;
