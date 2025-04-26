import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skillCategories } from '../../utils/common_function';


const Section = styled(motion.div)`
padding: 4rem 2rem;
max-width: 1000px;
margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 4rem;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
`;

const CategoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px #6e8efb, 0 0 30px #a777e3;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #6e8efb;
  color: #a777e3; /* softer, blends well */
  text-shadow: 0 0 10px rgba(167, 119, 227, 0.6);
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    border-left-color: #6e8efb;
    text-shadow: 0 0 15px #b0c7ff;
  }
`;


const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  li {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 500;
    color: #ddd;
    position: relative;
    padding-left: 1.8rem;
    transition: color 0.3s;

    &:before {
      content: '';
      width: 10px;
      height: 10px;
      background: linear-gradient(135deg, #6e8efb, #a777e3);
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      animation: pulse 1.5s infinite alternate;
    }

    &:hover {
      color: #fff;
    }
  }

  @keyframes pulse {
    0% {
      transform: translateY(-50%) scale(1);
    }
    100% {
      transform: translateY(-50%) scale(1.3);
    }
  }
`;

const Skills = () => {

  return (
    <Section>
      <SectionTitle>My Skills</SectionTitle>
      <Categories>
        {skillCategories.map((category, idx) => (
          <CategoryCard
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <CategoryTitle>{category.title}</CategoryTitle>
            <SkillList>
              {category.skills.map((skill, id) => (
                <li key={id}>{skill}</li>
              ))}
            </SkillList>
          </CategoryCard>
        ))}
      </Categories>
    </Section>
  );
};

export default Skills;
