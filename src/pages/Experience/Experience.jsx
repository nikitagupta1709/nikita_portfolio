// src/pages/Experience.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
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
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.3rem;
  line-height: 1.5;
  font-weight: 500;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    color: #6e8efb;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const Highlight = styled.span`
  color: #6e8efb;
  font-weight: 700;
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
    // Split by words and numbers including trailing %, preserving delimiters
    const parts = text.split(/(\b\d+%?|\b\w+\b)/g).filter(Boolean);

    const result = [];
    for (let i = 0; i < parts.length; i++) {
      const current = parts[i];

      // Combine number + % if next part is '%'
      if (/^\d+$/.test(current) && parts[i + 1] === '%') {
        result.push(<Highlight key={i}>{current + '%'}</Highlight>);
        i++; // skip '%'
        continue;
      }

      // Highlight numbers (with optional %) if not in excludedWords
      if (!excludedWords.includes(current) && /^\d+%?$/.test(current)) {
        result.push(<Highlight key={i}>{current}</Highlight>);
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
                  open: { height: "auto", opacity: 1, y: 0 },
                  collapsed: { height: 0, opacity: 0, y: -10 },
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <List>
                  {exp.details.map((point, i) => (
                    <ListItem key={i}>{formatText(point)}</ListItem>
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

// // src/pages/Experience.jsx
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { motion, AnimatePresence } from 'framer-motion';

// const Container = styled.div`
//   max-width: 900px;
//   margin: 3rem auto;
//   display: flex;
//   gap: 2rem;
//   min-height: 400px;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const Timeline = styled.div`
//   flex: 1;
//   border-left: 3px solid ${({ theme }) => theme.text + '44'};
//   position: relative;
//   padding-left: 2rem;
//   @media (max-width: 768px) {
//     border-left: none;
//     border-top: 3px solid ${({ theme }) => theme.text + '44'};
//     padding-left: 0;
//     padding-top: 2rem;
//     display: flex;
//     justify-content: space-around;
//   }
// `;

// const TimelineItem = styled.div`
//   position: relative;
//   margin-bottom: 3rem;
//   cursor: pointer;
//   padding-left: 1.5rem;

//   &:last-child {
//     margin-bottom: 0;
//   }

//   @media (max-width: 768px) {
//     padding-left: 0;
//     margin-bottom: 0;
//   }
// `;

// const Dot = styled.div`
//   position: absolute;
//   left: -11px;
//   top: 0;
//   width: 18px;
//   height: 18px;
//   border-radius: 50%;
//   border: 3px solid ${({ active, theme }) => (active ? theme.primary : theme.text + '88')};
//   background-color: ${({ active, theme }) => (active ? theme.primary : 'transparent')};
//   transition: all 0.3s ease;

//   @media (max-width: 768px) {
//     position: static;
//     margin-bottom: 0.5rem;
//   }
// `;

// const Year = styled.div`
//   font-weight: 700;
//   color: ${({ active, theme }) => (active ? theme.primary : theme.text + 'aa')};
//   font-size: 1.1rem;
//   margin-bottom: 0.2rem;
//   transition: color 0.3s ease;

//   @media (max-width: 768px) {
//     font-size: 0.95rem;
//   }
// `;

// const JobTitle = styled.div`
//   font-weight: 600;
//   color: ${({ theme }) => theme.text};
//   font-size: 1rem;
// `;

// const DetailsPanel = styled(motion.div)`
//   flex: 2;
//   background: ${({ theme }) => theme.body};
//   box-shadow: 0 8px 24px rgb(0 0 0 / 0.1);
//   border-radius: 12px;
//   padding: 2rem;
//   color: ${({ theme }) => theme.text};
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   min-height: 320px;

//   @media (max-width: 768px) {
//     min-height: auto;
//   }
// `;

// const CompanyLogo = styled.img`
//   width: 120px;
//   height: auto;
//   border-radius: 12px;
//   object-fit: contain;
//   align-self: flex-start;
//   margin-bottom: 1rem;
// `;

// const Role = styled.h3`
//   font-size: 1.7rem;
//   margin: 0 0 0.5rem 0;
//   color: ${({ theme }) => theme.primary};
// `;

// const CompanyName = styled.h4`
//   margin: 0 0 1rem 0;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text + 'cc'};
// `;

// const DateRange = styled.p`
//   font-style: italic;
//   color: ${({ theme }) => theme.text + '99'};
//   margin: 0 0 1rem 0;
// `;

// const BulletList = styled.ul`
//   list-style: disc inside;
//   margin: 0;
//   padding-left: 1rem;
//   color: ${({ theme }) => theme.text + 'dd'};
//   li {
//     margin-bottom: 0.75rem;
//     line-height: 1.4;
//   }
// `;

// const experiences = [
//   {
//     id: 1,
//     role: 'Software Development Engineer II (SDE2)',
//     company: 'Twinleaves',
//     logo: '/twinleaves_logo.jpg', // Make sure you have this image or replace with a valid one
//     dateRange: 'May 2025 – Present',
//     details: [
//       'Took ownership of the end-to-end development of key product features, delivering on-time with a focus on scalability and performance, resulting in a 30% increase in system efficiency.',
//       'Led design and implementation of system modules, improving scalability by 30% and reducing technical debt by 20%.',
//       'Improved development speed by 30% by implementing best practices for code quality and design patterns, reducing bugs by 15%.',
//       'Collaborated with cross-functional teams (product, design, QA), successfully launching 3 major features, increasing user engagement by 25%.',
//       'Mentored 5+ junior engineers, enhancing team productivity and skill set.',
//       'Contributed to system architecture, reducing future maintenance costs by 20%.',
//       'Drove CI/CD best practices, reducing deployment time by 40%, enabling seamless releases.',
//     ],
//   },
//   {
//     id: 2,
//     role: 'Associate Software Engineer',
//     company: 'Twinleaves',
//     logo: '/twinleaves_logo.jpg',
//     dateRange: 'Feb 2023 – April 2025',
//     details: [
//       'Led development of a B2B product initiative, improving operational efficiency and reducing manual effort by 30%.',
//       'Engineered a custom data grid in React.js, reducing load times by 40% and enhancing UI responsiveness by 25%.',
//       'Optimized performance using React’s virtual DOM, cutting unnecessary re-renders by 50% and improving speed by 35%.',
//       'Integrated React Context API and Redux, reducing prop drilling by 60%, resulting in cleaner code.',
//       'Established RBAC security, preventing 95% unauthorized access and ensuring compliance with industry standards.',
//     ],
//   },
// ];

// const Experience = () => {
//   const [selected, setSelected] = useState(experiences[0].id);

//   const currentExp = experiences.find((exp) => exp.id === selected);

//   return (
//     <Container>
//       <Timeline>
//         {experiences.map(({ id, role, dateRange }) => (
//           <TimelineItem
//             key={id}
//             onClick={() => setSelected(id)}
//             title={role}
//           >
//             <Dot active={selected === id} />
//             <Year active={selected === id}>{dateRange}</Year>
//             <JobTitle>{role}</JobTitle>
//           </TimelineItem>
//         ))}
//       </Timeline>

//       <AnimatePresence mode="wait" initial={false}>
//         <DetailsPanel
//           key={currentExp.id}
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -30 }}
//           transition={{ duration: 0.4 }}
//         >
//           <CompanyLogo src={currentExp.logo} alt={currentExp.company} />
//           <Role>{currentExp.role}</Role>
//           <CompanyName>{currentExp.company}</CompanyName>
//           <DateRange>{currentExp.dateRange}</DateRange>
//           <BulletList>
//             {currentExp.details.map((point, i) => (
//               <li key={i}>{point}</li>
//             ))}
//           </BulletList>
//         </DetailsPanel>
//       </AnimatePresence>
//     </Container>
//   );
// };

// export default Experience;
