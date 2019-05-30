import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HeartIcon } from '../assets/heart-icon.svg';
import ImageList from './ImageList';

const Card = ({ images }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <ImageList images={images} />
        <Heart>
          <HeartIcon />
        </Heart>
      </ImageContainer>
      <Type className="type">baking class · Tempe</Type>
      <Title className="title">French Baguette Experience By The Lake</Title>
      <Info className="info">
        <span>₴1,876 per person</span> <span>3 hours</span> <span>Food, Drinks, Equipment included</span>
      </Info>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Heart = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  width: 24px;
  height: 24px;
  &:hover {
    cursor: pointer;
  }
`;

const Type = styled.div`
  margin-bottom: 4px;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 800;
  color: rgb(118, 118, 118);
  text-transform: uppercase;
  /* Three dots */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 500px) {
    /* Issue with three dots on mobile */
    white-space: normal;
  }
`;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 4px;
  max-height: 4em;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
`;

const Info = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(72, 72, 72);
  max-height: 4em;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: break-word;
`;

export default Card;
