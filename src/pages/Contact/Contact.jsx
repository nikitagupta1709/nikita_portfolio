// src/pages/Contact.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Container = styled(motion.div)`
  max-width: 800px;
  margin: 3rem auto;
  background: ${({ theme }) => theme.body};
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.1);
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FormWrapper = styled.div`
  flex: 2;
`;

const InfoWrapper = styled.div`
  flex: 1;
  border-left: 1px solid ${({ theme }) => theme.text + '22'};
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 767px) {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid ${({ theme }) => theme.text + '22'};
    padding-top: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Input = styled.input`
width: 100%;
  padding: 0.85rem 1rem;
  border: 1.8px solid ${({ theme }) => theme.text + '55'};
  border-radius: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.primary + '44'};
  }
`;

const TextArea = styled.textarea`
width: 100%;
  padding: 0.85rem 1rem;
  border: 1.8px solid ${({ theme }) => theme.text + '55'};
  border-radius: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.primary + '44'};
  }
`;

const Button = styled(motion.button)`
  padding: 0.85rem 1.5rem;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  user-select: none;
  box-shadow: 0 6px 15px rgba(110, 142, 251, 0.5);
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #a777e3, #6e8efb);
  }
`;

const ErrorMsg = styled.span`
  color: #f44336;
  font-size: 0.875rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.text + 'cc'};
  font-size: 1rem;

  svg {
    color: ${({ theme }) => theme.primary};
    min-width: 20px;
    min-height: 20px;
  }
   a {
     color: ${({ theme }) => theme.primary};
     transition: color 0.3s ease;
      &:hover {
        color: #6e8efb;
      }
    }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;

  a {
     color: ${({ theme }) => theme.primary};
    font-size: 1.6rem;
    transition: color 0.3s ease;

    &:hover {
      color: #6e8efb;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // For demo, just alert and reset form
    alert('Thank you for contacting me!');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <FormWrapper>
        <Title>Contact Me</Title>
        <Form onSubmit={handleSubmit} noValidate>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby="name-error"
            /><br />
            {errors?.name && <ErrorMsg id="name-error">{errors?.name}</ErrorMsg>}
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby="email-error"
            /><br />
            {errors?.email && (
              <ErrorMsg id="email-error">{errors?.email}</ErrorMsg>
            )}
          </div>
          <div>
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby="message-error"
            /><br />
            {errors?.message && (
              <ErrorMsg id="message-error">{errors?.message}</ErrorMsg>
            )}
          </div>
          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </Button>
        </Form>
      </FormWrapper>

      <InfoWrapper>
        <Title>Get in Touch</Title>
        <ContactInfo>
          <FaEnvelope />
          <a href="mailto:nikitagupta1709@gmail.com">nikitagupta1709@gmail.com</a>
        </ContactInfo>
        <ContactInfo>
          <FaPhone />
          <a href="tel:+91 8429354194">+91 8429354194</a>
        </ContactInfo>
        <SocialLinks>
          <a
            href="https://www.linkedin.com/in/nikita-g-6594391b3/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nikitagupta1709"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </SocialLinks>
      </InfoWrapper>
    </Container>
  );
};

export default Contact;
