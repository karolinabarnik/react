import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <h2><Hero titleText={infoData.title} imageImg={infoData.image}/>Info</h2>
    <p>{infoData.description}</p>
  </Container>
);

export default Info;