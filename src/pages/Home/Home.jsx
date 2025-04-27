import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
  transition: background 0.4s ease-in-out;
  background: ${(props) =>
    props.theme.body === '#f1f1f1'
      ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      : `linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%),
         linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)`};
  background-blend-mode: ${(props) => (props.theme.body === '#f1f1f1' ? 'normal' : 'multiply')};
  margin: 0;
  overflow-y: auto;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  background: ${(props) =>
    props.theme.body === '#f1f1f1'
      ? 'linear-gradient(90deg, #667eea, #764ba2)'
      : 'linear-gradient(90deg, #c3cfe2, #f5f7fa)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 1s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const HelloImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  animation: fadeIn 1s ease-out;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 1.3rem;
  color: ${(props) => (props.theme.body === '#f1f1f1' ? '#37474f' : '#d3d3d3')};
  margin-bottom: 25px;
  font-weight: 500;
`;

const SummaryCard = styled.div`
  max-width: 700px;
  position: relative;
  z-index: 1;
  padding: 25px 30px;
  border-radius: 16px;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 35px;
  background: ${(props) => props.theme.body === '#f1f1f1' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(34, 34, 34, 0.9)'};
  color: ${(props) => (props.theme.body === '#f1f1f1' ? '#1e1e1e' : '#f0f0f0')};
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    z-index: -1;
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    border-radius: 18px;
    animation: moveGradient 4s alternate infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background: inherit;
    border-radius: 15px;
    z-index: -1;
  }

  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 50%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;           /* Full width on mobile */
    flex-direction: column; /* Stack items vertically */
    justify-content: center;
    gap: 15px;
  }
`;


const IconDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  font-size: 1.5rem;
  color: ${(props) => (props.theme.body === '#f1f1f1' ? '#37474f' : '#f0f0f0')};
  transition: color 0.3s ease-in-out;
`;

const IconItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  span {
    margin-top: 5px;
    font-size: 0.8rem;
  }

  &:hover {
    color: ${(props) => (props.theme.body === '#f1f1f1' ? '#5a67d8' : '#cfcfcf')};
  }
`;

const Button = styled.a`
  padding: 12px 25px;
  background-color: ${(props) => (props.theme.body === '#f1f1f1' ? '#667eea' : '#ffffff')};
  color: ${(props) => (props.theme.body === '#f1f1f1' ? '#ffffff' : '#323232')};
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.theme.body === '#f1f1f1' ? '#5a67d8' : '#d1d1d1')};
    transform: translateY(-3px);
    color: ${(props) => (props.theme.body === '#f1f1f1' ? '#ffffff' : '#323232')};
  }
  @media (max-width: 600px) {
    align-self: center; /* center the button horizontally in column layout */
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ProfileImage src={'/profileImage.jpg'} alt="Profile" />
      <Heading>
        <HelloImage src={'/helloGif.gif'} alt="Hello Gif" />
        Hey, I'm Nikita Gupta
      </Heading>
      <SubHeading>Full Stack Developer | React • Node • MongoDB</SubHeading>
      <SummaryCard>
        I'm a Full-Stack Developer with experience in crafting seamless, high-performance web apps.
        Proficient in React.js, Node.js, and MongoDB, with a flair for clean architecture and intuitive design.
        What drives me is innovation, continuous growth, and the pursuit of building impactful digital experiences.
      </SummaryCard>
      <Footer>
        <IconDiv>
          <IconItem href="mailto:nikitagupta1709@gmail.com" target="_blank" rel="noopener noreferrer">
            📧
            <span>Email</span>
          </IconItem>
          <IconItem href="tel:+918429354194" target="_blank" rel="noopener noreferrer">
            📞
            <span>Phone</span>
          </IconItem>
          <IconItem href="https://www.linkedin.com/in/nikita-g-6594391b3/" target="_blank" rel="noopener noreferrer">
            🔗
            <span>LinkedIn</span>
          </IconItem>
          <IconItem href="https://github.com/nikitagupta1709" target="_blank" rel="noopener noreferrer">
            🐙
            <span>GitHub</span>
          </IconItem>
        </IconDiv>
        <Button onClick={() => navigate("/about")}>Know More</Button>
      </Footer>

    </Wrapper>
  );
};

export default Home;
