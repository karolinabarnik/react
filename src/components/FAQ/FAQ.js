import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <h2><Hero titleText={faqData.title} imageImg={faqData.image}/>Info</h2>
    <p>{faqData.description}</p>
  </Container>
);

export default FAQ;