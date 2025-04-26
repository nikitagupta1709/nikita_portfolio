import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = styled.nav`
  width: 100%;
  background: ${(props) =>
    props.theme.body === '#f1f1f1' ? '#fff' : '#121212'};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;  /* Space between left and right */
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  position: relative;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const InitialLetter = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  font-weight: 900;
  font-size: 2.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  box-shadow: 0 4px 12px rgba(110, 142, 251, 0.6);
`;

const NavLinks = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    background: ${(props) =>
    props.theme.body === '#f1f1f1' ? '#fff' : '#121212'};
    position: fixed;
    top: 70px;
    right: 0;
    width: 60%;
    max-width: 300px;
    height: 100vh;
    padding: 2rem 1rem;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);
    transform: translateX(100%);
    z-index: 20;
  }
`;

const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.text};
    color: #6e8efb;
  }
  &:hover {
    color: #6e8efb;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    font-size: 1.2rem;
    border-bottom: 1px solid ${({ theme }) => theme.text}22;
  }
`;

const Button = styled(motion.a)`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    color: #fff;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    display: inline-block;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  display: none; /* hidden by default */

  @media (max-width: 768px) {
    display: block;
  }
`;

const navVariants = {
  open: {
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  closed: {
    x: '100%',
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize to toggle isMobile state & close menu if resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // close menu on desktop
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const firstNameInitial = 'N'; // Your initial here

  return (
    <Nav>
      <NavLeft onClick={() => navigate('/')}>
        {location.pathname === '/' ? (
          <InitialLetter >{firstNameInitial}</InitialLetter>
        ) : (
          <ProfileImage src="/profileImage.jpg" alt="Profile" />
        )}
      </NavLeft>

      {/* Hamburger button always right aligned */}
      <HamburgerButton
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </HamburgerButton>

      {/* Nav Links */}
      {/* Show inline nav only on desktop */}
      {!isMobile && (
        <NavLinks
          initial={false}
          animate="open"
          style={{ position: 'static', height: 'auto', width: 'auto', boxShadow: 'none', padding: 0, flexDirection: 'row' }}
        >
          <li>
            <NavItem to="/" exact="true">
              Home
            </NavItem>
          </li>
          <li>
            <NavItem to="/about">
              About
            </NavItem>
          </li>
          <li>
            <NavItem to="/projects">
              Projects
            </NavItem>
          </li>
          <li>
            <NavItem to="/skills">
              Skills
            </NavItem>
          </li>
          <li>
            <NavItem to="/experience">
              Experience
            </NavItem>
          </li>
          <li>
            <NavItem to="/contact">
              Contact
            </NavItem>
          </li>
          <li>
            <Button
              href="https://drive.google.com/drive/folders/180xQdm9VWQRM1JneHXamiwyX_ajWaZZi?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                // just to be safe, don't let React Router interfere with this external link
                e.stopPropagation();
              }}
            >
              Download Resume
            </Button>
          </li>
        </NavLinks>
      )}

      {/* Mobile sliding nav */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <NavLinks
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={navVariants}

          >
            <li>
              <NavItem to="/" exact="true">
                Home
              </NavItem>
            </li>
            <li>
              <NavItem to="/about">
                About
              </NavItem>
            </li>
            <li>
              <NavItem to="/projects">
                Projects
              </NavItem>
            </li>
            <li>
              <NavItem to="/experience">
                Experience
              </NavItem>
            </li>
            <li>
              <NavItem to="/contact">
                Contact
              </NavItem>
            </li>
            <li>
              <Button
                href="https://drive.google.com/drive/folders/180xQdm9VWQRM1JneHXamiwyX_ajWaZZi?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                onClick={(e) => {
                  // just to be safe, don't let React Router interfere with this external link
                  e.stopPropagation();
                }}
              >
                Download Resume
              </Button>

            </li>
          </NavLinks>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
