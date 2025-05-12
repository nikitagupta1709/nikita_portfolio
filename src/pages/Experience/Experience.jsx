// src/pages/Experience.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiCheckCircle } from 'react-icons/fi';
import { experiences } from '../../utils/common_function';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  color: ${(props) => props.theme.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const AccordionItem = styled.div`
  background: ${(props) => props.theme.body};
  border-radius: 10px;
  box-shadow: 0 6px 15px rgb(0 0 0 / 0.1);
  margin-bottom: 1.2rem;
  overflow: hidden;
`;

const AccordionHeader = styled(motion.div)`
  padding: 1.6rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: #fff;
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 10px;
  user-select: none;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1 1 auto;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  background: #fff;
`;

const RoleCompany = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-weight: 700;
    font-size: 1.25rem;
  }

  span:last-child {
    font-weight: 500;
    opacity: 0.85;
    font-size: 1.1rem;
  }
`;

const Duration = styled.span`
  font-weight: 400;
  font-size: 1.1rem;
  opacity: 0.8;
  flex-shrink: 0;

  @media (max-width: 480px) {
    align-self: flex-end;
  }
`;

const AccordionContent = styled(motion.div)`
  background: ${(props) => props.theme.body};
  padding: 1rem 2rem 2rem 2rem;
  color: ${(props) => props.theme.text};
  font-size: 1.15rem;
  line-height: 1.6;
`;

const List = styled.ul`
  margin-top: 0.8rem;
  padding-left: 0;
`;

const ListItem = styled(motion.li)`
  margin-bottom: 1rem;
  padding: 1rem;
  list-style: none;
  border-left: 4px solid #6e8efb;
  background-color: #f5f7ff;
    color: #000;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-weight: 500;
`;

const Icon = styled(FiCheckCircle)`
  color: #6e8efb;
  flex-shrink: 0;
  font-size: 1.2rem;
  margin-top: 4px;
`;

const Highlight = styled.span`
  color: #6e8efb;
  font-weight: 700;
`;

const Badge = styled.span`
  background: #e0e7ff;
  color: #4338ca;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  margin-left: 0.5rem;
  font-weight: 600;
`;

const ChevronIcon = styled(FiChevronDown)`
  font-size: 1.8rem;
  transition: transform 0.3s ease;
  color: #fff;
  flex-shrink: 0;
  margin-left: 1rem;
`;

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const excludedWords = ["B2B"];

  function formatText(text) {
    const parts = text.split(/(\b\d+%?|\b\w+\b)/g).filter(Boolean);

    const result = [];
    for (let i = 0; i < parts.length; i++) {
      const current = parts[i];

      if (/^\d+$/.test(current) && parts[i + 1] === '%') {
        result.push(<Highlight key={i}>{current + '%'}</Highlight>);
        i++;
        continue;
      }

      if (!excludedWords.includes(current) && /^\d+%?$/.test(current)) {
        result.push(<Highlight key={i}>{current}</Highlight>);
      } else if (['React', 'Redux', 'Node.js', 'ownership', 'Firebase', 'RBAC', 'Langchain', 'Agentspace', 'CI/CD'].includes(current)) {
        result.push(<Badge key={i}>{current}</Badge>);
      } else {
        result.push(current);
      }
    }

    return result;
  }

  return (
    <Wrapper>
      <Title>Work Experience</Title>
      {experiences.map((exp, idx) => (
        <AccordionItem key={idx}>
          <AccordionHeader
            onClick={() => toggleIndex(idx)}
            initial={false}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <LeftSection>
              <Logo src={exp.logo} alt={`${exp.company} logo`} />
              <RoleCompany>
                <span>{exp.role}</span>
                <span>{exp.company}</span>
              </RoleCompany>
            </LeftSection>

            <Duration>{exp.duration}</Duration>

            <motion.div
              animate={{ rotate: activeIndex === idx ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronIcon />
            </motion.div>
          </AccordionHeader>

          <AnimatePresence initial={false}>
            {activeIndex === idx && (
              <AccordionContent
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { height: 'auto', opacity: 1, y: 0 },
                  collapsed: { height: 0, opacity: 0, y: -10 },
                }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <List>
                  {exp.details.map((point, i) => (
                    <ListItem
                      key={i}
                      even={i % 2 === 0}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Icon />
                      <div>{formatText(point)}</div>
                    </ListItem>
                  ))}
                </List>
              </AccordionContent>
            )}
          </AnimatePresence>
        </AccordionItem>
      ))}
    </Wrapper>
  );
};

export default Experience;
