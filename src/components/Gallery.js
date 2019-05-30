import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Container from './styles/Container';

import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';
import image4 from '../assets/image-4.jpg';
import image6 from '../assets/image-6.jpg';
import image7 from '../assets/image-7.jpg';
import image8 from '../assets/image-8.jpg';

const mainImages = [image1, image2, image3, image4, image6, image7, image8];

const Gallery = () => {
  return (
    <GalleryContainer>
      <Container>
        <GridContainer>
          {/* Hardcoded images */}
          {mainImages.map((img, index) => (
            <Card key={index} images={[...mainImages.sort((a, b) => Math.random() - 0.5)].slice(0, 3)} />
          ))}
        </GridContainer>
      </Container>
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  margin-top: 24px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export default Gallery;
